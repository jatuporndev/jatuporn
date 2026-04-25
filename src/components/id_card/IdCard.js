import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Barcode from "react-barcode";
import styled from "styled-components";
import DetailCardValue from "./DetailCardValue";
import emailIcon from "../../resouses/footer/email.svg";
import { SOFT_SURFACE_COLOR, SURFACE_COLOR, TEXT_COLOR, MUTED_TEXT_COLOR } from "../../utility/utility";

const EMAIL = "jatuporn.saenthip@gmail.com";

/** Fun “security” blurb from email (Base64 + toy fingerprint — not cryptographic). */
function buildContactSecurityToken(email) {
  let b64 = "";
  try {
    if (typeof btoa !== "undefined") b64 = btoa(email);
  } catch {
    b64 = "";
  }
  let h = 0x811c9dc5;
  for (let i = 0; i < email.length; i++) {
    h ^= email.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  const fp = (h >>> 0).toString(16).toUpperCase().padStart(8, "0");
  const fp2 = (Math.imul(h ^ 0xdeadbeef, 0x9e3779b1) >>> 0)
    .toString(16)
    .toUpperCase()
    .padStart(8, "0");
  return { b64, fp: `${fp}${fp2}` };
}

/** Degrees of Y rotation per pixel dragged (horizontal). ~0.42 ≈ 430px for full 180° */
const DEG_PER_PX = 0.42;

const FlipContainer = styled.div`
  perspective: 1100px;
  width: 93.6mm;
  max-width: 100%;
  height: 55mm;
  min-height: 208px;
  margin: 0 auto;
`;

const FlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const FlipFace = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 12px;
`;

const FlipFront = styled(FlipFace)`
  transform: rotateY(0deg);
`;

const FlipBack = styled(FlipFace)`
  transform: rotateY(180deg);
`;

const MainCard = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.$color};
  transition: background-color ease 0.4s;
  border: 1px solid ${TEXT_COLOR};
  border-radius: 12px;
  display: flex;
`;

const LeftDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-self: center;
  align-items: center;
  padding: 16px;
`;

const ProfileImage = styled.img`
  display: block;
  width: 110px;
  height: 150px;
  border-radius: 1px;
  max-height: 100%;
  border: 1px solid ${TEXT_COLOR};
  background-color: ${SURFACE_COLOR};
  object-fit: cover;
  overflow-clip-margin: unset;
`;

const RightDetail = styled.div`
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconCardBox = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${TEXT_COLOR};
  object-fit: cover;
  object-position: center;
  background-color: ${SURFACE_COLOR};
  overflow-clip-margin: unset;
`;

/* Title row: body font (Kanit) — same as earliest card with logo */
const TextTitle = styled.div`
  height: 28px;
  line-height: 32px;
  text-align: center;
`;

/* Original card (layout card): Pangolin 12px, simple margin */
const Dot = styled.div`
  font-family: "Pangolin", sans-serif;
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
`;

const Under = styled.div`
  font-family: "Pangolin", sans-serif;
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
`;

const DetailBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: 8px;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
`;

const BackCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(
    145deg,
    ${(props) => props.$color} 0%,
    ${SURFACE_COLOR} 48%,
    ${(props) => props.$color} 100%
  );
  border: 1px solid ${TEXT_COLOR};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px 12px 40px;
  transition: background 0.4s ease;
`;

const BackBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const BackBrandLogo = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  flex-shrink: 0;
`;

const BackBrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`;

const BackBrandTitle = styled.div`
  font-family: "Pangolin", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${TEXT_COLOR};
  line-height: 1.1;
  letter-spacing: 0.04em;
`;

const BackBrandSub = styled.div`
  font-family: "Pangolin", sans-serif;
  font-size: 9px;
  color: ${MUTED_TEXT_COLOR};
  line-height: 1.1;
`;

const BackCenter = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
`;

const BackEmailCorner = styled.div`
  position: absolute;
  bottom: 6px;
  right: 6px;
  left: 6px;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  z-index: 2;

  & > a {
    pointer-events: auto;
  }
`;

const EmailRow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${TEXT_COLOR};
  font-family: "Kanit", "Pangolin", sans-serif;
  font-size: 12px;
  max-width: 100%;
  word-break: break-all;
  text-align: center;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px dashed ${MUTED_TEXT_COLOR};
  background: rgba(255, 254, 251, 0.72);

  @media (hover: hover) {
    &:hover {
      background: ${SOFT_SURFACE_COLOR};
      border-color: ${TEXT_COLOR};
    }
  }
`;

const EmailCornerLink = styled(EmailRow)`
  gap: 4px;
  max-width: min(100%, 58%);
  font-size: 7.5px;
  line-height: 1.25;
  padding: 4px 6px;
  text-align: right;
  justify-content: flex-end;
  word-break: break-all;
`;

const EmailIcon = styled.img`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

const EmailCornerIcon = styled(EmailIcon)`
  width: 13px;
  height: 13px;
`;

const BackSecurity = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const BackSecurityLabel = styled.div`
  font-family: "Pangolin", sans-serif;
  font-size: 8px;
  letter-spacing: 0.14em;
  color: #9e9e9e;
  text-align: center;
`;

const BackSecurityB64 = styled.div`
  font-family: "Consolas", "Courier New", monospace;
  font-size: 7px;
  line-height: 1.3;
  color: #616161;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BackSecurityHex = styled.div`
  font-family: "Consolas", "Courier New", monospace;
  font-size: 7px;
  letter-spacing: 0.06em;
  color: #757575;
  text-align: center;
  word-break: break-all;
`;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function IdCard(props) {
  const { colorCard, iconCard, profileCard } = props;
  const barcodeValue = "jatuporndev";
  const securityToken = useMemo(() => buildContactSecurityToken(EMAIL), []);

  /** 0 = front, -180 = back (rotate Y, flip right) */
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const rotationRef = useRef(0);
  const dragOrigin = useRef({ x: 0, r0: 0 });
  const draggingRef = useRef(false);
  const innerRef = useRef(null);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  const snapRotation = useCallback((r) => (r < -90 ? -180 : 0), []);

  const endDrag = useCallback(
    (e) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setDragging(false);
      const el = innerRef.current;
      if (el && e?.pointerId != null) {
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {
          /* ignore */
        }
      }
      setRotation((r) => snapRotation(r));
    },
    [snapRotation]
  );

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    if (e.target.closest && e.target.closest('a[href^="mailto"]')) return;

    draggingRef.current = true;
    setDragging(true);
    dragOrigin.current = {
      x: e.clientX,
      r0: rotationRef.current,
    };
    innerRef.current?.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragOrigin.current.x;
    const next = clamp(
      dragOrigin.current.r0 + dx * DEG_PER_PX,
      -180,
      0
    );
    setRotation(next);
  }, []);

  const onPointerUp = useCallback(
    (e) => {
      endDrag(e);
    },
    [endDrag]
  );

  const onPointerCancel = useCallback(
    (e) => {
      endDrag(e);
    },
    [endDrag]
  );

  const showBack = rotation < -90;

  return (
    <FlipContainer
      role="group"
      tabIndex={0}
      aria-label={
        showBack
          ? "Contact card with email. Arrow keys flip between front and back."
          : "Personal ID card. Arrow keys flip between front and back."
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setRotation((r) => (r < -90 ? 0 : -180));
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setRotation(-180);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setRotation(0);
        }
      }}
    >
      <FlipInner
        ref={innerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onLostPointerCapture={onPointerCancel}
        style={{
          transform: `rotateY(${rotation}deg)`,
          transition: dragging
            ? "none"
            : "transform 0.45s cubic-bezier(0.4, 0.2, 0.2, 1)",
        }}
      >
        <FlipFront>
          <MainCard $color={colorCard}>
            <LeftDetail>
              <ProfileImage
                src={require(`../../resouses/profile/${profileCard}`)}
                alt="profile"
                title="profile"
              />
              <Barcode
                value={barcodeValue}
                width={0.7}
                height={15}
                margin={0}
                marginTop={8}
                background="transparent"
                displayValue={false}
              />
            </LeftDetail>
            <RightDetail>
              <IconCardBox>
                <TextTitle>PERSONAL ID CARD</TextTitle>
                <span aria-hidden="true">
                  <Icon
                    src={require(`../../resouses/icon-card/${iconCard}`)}
                    alt=""
                  />
                </span>
              </IconCardBox>
              <Dot>- - - - - - - - - - - - - - - - - - - - - - - -</Dot>
              <DetailBox>
                <DetailCardValue title="Name" value="JATUPORN" />
                <DetailCardValue title="LastName" value="SAENTHIP" />
                <DetailCardValue title="NickName" value="OHM" />
                <DetailCardValue title="DOB" value="1999" />
                <DetailCardValue title="Sex" value="M" />
                <DetailCardValue title="Nationality" value="THAI" />
              </DetailBox>
              <Under> </Under>
            </RightDetail>
          </MainCard>
        </FlipFront>

        <FlipBack>
          <BackCard $color={colorCard}>
            <BackBrand>
              <span aria-hidden="true">
                <BackBrandLogo
                  src={`${process.env.PUBLIC_URL}/favicon.ico`}
                  alt=""
                />
              </span>
              <BackBrandText>
                <BackBrandTitle>JATUPORN</BackBrandTitle>
                <BackBrandSub>healthcheck</BackBrandSub>
              </BackBrandText>
            </BackBrand>

            <BackCenter>
              <BackSecurity aria-hidden="true">
                <BackSecurityLabel>
                  TOY VERIFY · B64(contact) · NOT REAL CRYPTO
                </BackSecurityLabel>
                <BackSecurityB64 title={securityToken.b64}>
                  B64::{securityToken.b64}
                </BackSecurityB64>
                <BackSecurityHex>
                  FP16·{securityToken.fp}
                </BackSecurityHex>
              </BackSecurity>
            </BackCenter>

            <BackEmailCorner>
              <EmailCornerLink href={`mailto:${EMAIL}`}>
                <span aria-hidden="true">
                  <EmailCornerIcon src={emailIcon} alt="" />
                </span>
                {EMAIL}
              </EmailCornerLink>
            </BackEmailCorner>
          </BackCard>
        </FlipBack>
      </FlipInner>
    </FlipContainer>
  );
}

export default IdCard;
