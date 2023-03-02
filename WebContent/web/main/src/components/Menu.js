import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import './Menu.css';

function Menu() {
    const [render, setRender] = useState(0);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);
    const isMenu = useSelector((state) => state.isMenu);
    const isYesAgreement = useSelector((state) => state.isYesAgreement);
    const isNoAgreement = useSelector((state) => state.isNoAgreement);
    const isPopUpHowTo = useSelector((state) => state.isPopUpHowTo);
    const isPopUpInfo = useSelector((state) => state.isPopUpInfo);
    const isInner = useSelector((state) => state.isInner);
    const isMypage = useSelector((state) => state.isMypage);
    const isPlater = useSelector((state) => state.isPlater);
    const isHowto = useSelector((state) => state.isHowto);
    const isMembershipWithdrawal = useSelector((state) => state.isMembershipWithdrawal);
    const [isPopUpLogOut, setIsPopUpLogOut] = useState(false);

    const settings = {
        draggable: true,
        swipe: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // function singOut() {
    //     fetch("https://kapi.kakao.com/v1/user/unlink", {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${usertoken}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //         });
    // };

    function PopUpHowTo() {
        return (
            <React.Fragment>
                <div className={isPopUpHowTo ? "isPopUpHowTo" : "isPopUpHowTo_fade"}>
                    <div className='isPopUpHowTo_outContainer'>
                        <div className='isPopUpHowTo_closed' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPHOWTO', data: !isPopUpHowTo });
                        }}></div>
                        <p className='isPopUpHowTo_title'>이용약관</p>
                        <article className='isPopUpHowTo_article'>
                            <p>제1조 목적</p>
                            <p>본 약관은 소소한 프로젝트(이하 ‘제공자’)가 제공하는 서비스(회원이 PC, 모바일 등의 각종 디지털 기기 또는 프로그램을 통하여 이용할 수 있도록 제공자가 제공하는 모든 서비스 의미)를 이용하는데 필요한 제공자와 회원 간의 절차 및 이용조건, 권리, 의무 및 책임사항 등 기타 필요한 사항들을 규정함을 목적으로 합니다.</p>
                            <p>제2조 약관의 명시 및 효력</p>
                            <article>
                                <p>1. 본 약관의 내용은 제공자가 제공하는 모든 서비스에 게시하여 공시합니다.</p>
                                <p>2. 제공자는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 제공자는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여 시행일 최소 7일 이전부터 시행일 후 상당한 기간 동안 공지하고, 기존 회원에게는 변경된 약관과 적용일자를 공식 홈페이지, 서비스 내 알림 등 합리적이고 수용 가능한 방법으로 변경사항을 공지 또는 통지합니다.</p>
                                <p>3. 회원은 변경된 약관에 동의하지 않을 권리가 있으며, 시행일로부터 7일 이내 변경된 약관에 대해 전자메일, 공식 홈페이지 문의 등 합리적인 방법으로 거절의 의사를 표시하지 않았을 때는 본 약관에 동의한 것으로 간주합니다.</p>
                            </article>
                            <p>제3조 약관 외 준칙</p>
                            <p>제공자는 본 이용약관 및 개별 서비스의 운영정책(이하 ‘운영정책’)을 정할 수 있으며, 본 약관에서 규정된 내용이 개별 서비스 약관에서 정한 운영정책과 충돌하는 경우 개별 서비스의 약관 규정을 우선하여 적용합니다. 본 약관에 규정되지 않은 사항에 대해서는 별도의 운영정책, 제공자의 공지, 이용안내, 상·관행, 관계법령에서 정한 바를 따릅니다.</p>
                            <p>제4조 서비스의 구분</p>
                            <article>
                                <p>1. 제공자가 회원에게 제공하는 무료 서비스, 유료 서비스, 개별 서비스 등 모든 서비스를 ‘서비스’라고 칭합니다.</p>
                                <p>2. 무료 서비스, 유료 서비스 등의 종류와 이용방법 등은 이 약관 및 제공자가 공지 또는 이용안내에서 별도로 정하는 바에 따릅니다.</p>
                            </article>
                            <p>제5조 이용계약의 성립</p>
                            <p>1. 제공자가 지정하는 타 서비스 계정(카카오 등)을 활용하여 본 서비스의 계정을 생성할 수 있습니다. 제공자는 가입신청자의 신청에 대하여 서비스 이용 승낙을 원칙으로 합니다. 이용 승낙을 통해 서비스를 자유롭게 이용할 수 있습니다.</p>
                            <p>제6조 계정 생성 거절 및 승낙 보류</p>
                            <article>
                                <p>1. 제공자는 아래와 같은 경우 이용계약을 거절 및 철회할 수 있습니다.</p>
                                <article>
                                    <p>가. 타인 명의의 전자메일 주소 및 개인정보를 이용하여 계정을 생성한 경우</p>
                                    <p>나. 회원의 귀책사유로 이용 승낙이 곤란한 경우</p>
                                </article>
                                <p>2. 제공자는 전항의 각호에 사유가 해당하는 경우, 즉시 사용자의 서비스 이용을 중단하거나 계정을 삭제하는 등 적절한 서비스 제한을 할 수 있습니다.</p>
                                <p>3. 제공자는 아래와 같은 경우에 이용계약을 보류할 수 있습니다.</p>
                                <article>
                                    <p>가. 제공 서비스 설비 용량에 현실적인 여유가 없는 경우</p>
                                    <p>나. 서비스 제공을 위한 기술적인 부분에 문제가 있다고 판단되는 경우</p>
                                    <p>다. 기타 제공자가 재정적, 기술적으로 사용 제한이 필요하다고 인정하는 경우</p>
                                </article>
                            </article>
                            <p>제7조 아이디 부여 및 관리</p>
                            <article>
                                <p>1. 제공자는 회원에게 임의의 아이디를 부여합니다.</p>
                                <p>2. 회원이 생성한 아이디는 변경할 수 없음을 원칙으로 합니다.</p>
                                <p>3. 회원이 생성한 계정의 정보는 회원 본인만 이용할 수 있으며, 다른 사람이 계정 정보를 사용하여 동일한 계정의 서비스를 이용할 수 없습니다. 회원 본인을 제외한 다른 사람이 계정을 무단으로 사용할 수 없도록 비밀번호는 회원이 직접 관리하여야 합니다.</p>
                                <p>4. 서비스 내 프로필 관리 메뉴를 통하여 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스의 제공 및 관리를 위해 아이디 등 일부 정보는 수정이 불가능합니다. 서비스 이용 신청 시 카카오가 제공한 내용에 변동이 있을 땐 이를 직접 수정하여야 합니다.</p>
                            </article>
                            <p>제8조 제공자의 의무</p>
                            <p>1. 제공자는 회원으로부터 제기되는 의견 및 불만사항이 정당하다고 인정할 경우 즉시 처리하고, 즉시 처리가 곤란한 경우에는 회원에게 그 사유와 처리 일정을 안내해야 합니다.</p>
                            <p>2. 제공자는 지속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실 된 때에는 지체 없이 수리 또는 복구해야 하며, 아래 각 호의 사유 발생 시 부득이한 경우 예고 없이 서비스의 전부 또는 일부의 제공을 일시 중지할 수 있습니다. 그 경우 사유 및 중지 기간 등을 회원에게 사후 공지합니다.</p>
                            <article>
                                <p>가. 제공자가 긴급한 시스템 점검, 증설, 교체, 시설의 보수 또는 공사를 위해 부득이한 경우</p>
                                <p>나. 새로운 서비스 시스템으로의 교체 등을 위하여 제공자가 필요하다고 판단한 경우</p>
                                <p>다. 시스템 또는 기타 서비스의 설비와 장애, 유무선 네트워크 장애 등으로 정상적인 서비스 제공이 불가능한 경우</p>
                                <p>라. 천재지변, 국가비상사태, 정전 등 제공자가 통제할 수 없는 불가항력적 사유가 발생한 경우</p>
                            </article>
                            <p>제9조 개인정보보호</p>
                            <p>제공자는 회원들의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 전기통신사업법 등 관련 법규를 준수하고 있습니다. 제공자는 회원이 제공한 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떤 조치가 취해지고 있는지 알려드립니다.</p>
                            <p>제10조 회원의 의무</p>
                            <p>1. 회원가입 시 허위 또는 타인의 정보를 등록한 경우 제공자에 대하여 서비스 일체의 권리를 주장할 수 없으며, 제공자는 이로 인하여 발생하는 손해에 대하여 책임을 부담하지 않습니다.</p>
                            <p>2. 회원은 본 약관에서 규정하는 사항과 기타 제공자가 정한 제반 규정 및 공지사항을 준수하여야 합니다. 회원은 제공자의 업무에 방해가 되는 행위, 제공자의 명예를 손상시키는 행위를 해서는 안 됩니다.</p>
                            <p>3. 회원은 청소년보호법 등 관계법령을 준수하여야 합니다. 회원이 청소년보호법 등 관계법령을 위반하는 경우 해당 법령에 의거하여 처벌을 받을 수 있고, 제공자는 이를 책임지지 않습니다.</p>
                            <p>4. 회원은 회원의 아이디와 비밀번호를 직접 관리해야 합니다. 관리 소홀로 발생한 문제는 제공자가 책임지지 않습니다.</p>
                            <p>5. 회원은 이름, 기타 서비스 내에서 사용되는 명칭을 아래에 해당하는 내용으로 사용하여서는 안 됩니다.</p>
                            <article>
                                <p>가.서비스 공식 운영자를 사칭하거나 유사한 명칭을 사용하여 혼란을 초래하는 행위</p>
                                <p>나. 선정적이고 음란한 내용이 포함된 명칭의 사용</p>
                                <p>다. 제3자의 상표권, 저작권 등 권리를 침해할 가능성이 있는 명칭의 사용</p>
                                <p>라. 비어, 속어라고 판단되거나 반사회적이고 관계법령에 저촉되는 내용이 포함된 명칭의 사용</p>
                            </article>
                            <p>6. 회원은 서비스의 이용권한, 기타 계약상의 지위를 타인에게 매도 및 증여할 수 없으며 무형자산을 담보로 제공할 수 없습니다.</p>
                            <p>7. 회원은 제공자에서 제공하는 서비스의 본래의 목적 이외의 용도로 사용해서는 안 됩니다. 아래 해당하는 경우 서비스 이용을 제한하거나 계정 삭제, 수사기관의 고발조치 등 제재를 가할 수 있습니다.</p>
                            <article>
                                <p>가. 회원가입 또는 변경 시 허위정보를 기재하는 행위</p>
                                <p>나. 타인의 개인정보를 도용하거나 부정하게 사용하는 행위</p>
                                <p>다. 회원의 계정을 타인에게 매매하는 행위</p>
                                <p>라. 제공자의 운영진 또는 직원을 사칭하는 행위</p>
                                <p>마. 제공자의 서버 해킹 및 클라이언트 프로그램을 변경하는 행위</p>
                                <p>바. 제공자 서비스의 버그를 악용하는 행위</p>
                                <p>사. 제공자의 사전 승낙 없이 영업활동으로 사용하는 행위</p>
                                <p>아. 다른 회원을 위협, 희롱, 고통, 피해, 불편을 주는 행위</p>
                                <p>자. 제공자의 승낙 및 권한 없이 제공자 서비스 관련 프로그램을 배포하거나 사용을 권장하는 행위</p>
                                <p>차. 제공자의 서비스에 고의적으로 방해하는 일체의 행위</p>
                                <p>카. 제공자의 서비스를 통하여 얻은 정보를 제공자의 사전 승낙 없이 복제, 출판, 방송, 광고, 제3자에게 제공하는 행위</p>
                                <p>타. 공공질서 및 미풍양속에 위반되는 행위를 지속하거나 음란한 내용의 정보, 문장, 음향, 동영상, 이미지 등을 유포하는 행위</p>
                                <p>파. 본 약관을 포함하여 기타 제공자가 정한 제반규정 또는 이용조건을 위반하는 행위 및 기타 관계 법령에 위배되는 행위</p>
                            </article>
                            <p>제11조 서비스의 제한 및 제공중단</p>
                            <p>1. 제공자는 천재지변, 전시 등 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.</p>
                            <p>2. 제공자가 제공하는 무료 서비스는 제공자의 경영정책 등의 사유로 서비스의 전부 또는 일부가 제한되거나 중지될 수 있으며, 유료로 전환될 수 있습니다.</p>
                            <p>3. 제공자는 서비스의 이용을 제한하거나 정지하는 때와 무료 서비스를 유료로 전환하는 때에는 그 사유 및 제한기간, 예정일시 등을 지체 없이 사전 또는 사후에 회원에게 안내합니다.</p>
                            <p>4. 제공자는 최종 사용일로부터 연속하여 1년 동안 서비스 사용 이력이 없는 경우 "정보통신망 이용촉진 및 정보보호에 관한 법률"의 규정에 의하여 회원정보 및 계정을 영구적으로 삭제할 수 있습니다. 단, 유료 결제 상품을 보유하고 있을 경우 삭제 대상에서 제외되며 관련 법령의 규정에 의하여 보존할 필요가 있는 경우 제공자는 관계법령에서 정한 일정기간 동안 회원정보를 보관합니다.</p>
                            <p>5. 제공자는 회원이 유료 서비스의 결제 요금 등을 지정한 기일로부터 1개월 이상 납부하지 않을 경우에는 전부 또는 일부의 서비스 제공을 중단할 수 있습니다.</p>
                            <p>6. 제공자는 회원이 아래에 해당하는 경우 회원의 서비스 이용을 일부 또는 전부 제한할 수 있습니다. 회원의 이용을 제한하는 경우, 제한의 종류 및 기간 등 구체적인 기준은 제공자의 공지 및 이용안내 등에서 별도로 정하는 바에 따릅니다.</p>
                            <article>
                                <p>가. 다량의 정보를 전송하여 서비스의 안정적 운영을 방해하는 경우</p>
                                <p>나. 수신자의 의사에 반하는 광고성 정보, 욕설, 성희롱 등 지속적으로 전송하는 경우</p>
                                <p>다. 정보통신설비의 오작동이나 정보의 파괴를 유발하는 컴퓨터 바이러스 프로그램 등을 유포하는 경우</p>
                                <p>라. 제3자의 지적재산권을 침해하는 경우</p>
                                <p>마. 다른 회원의 아이디를 부정하게 사용하는 경우</p>
                                <p>바. 전기통신관련법령 등을 위반하는 행위를 하는 경우</p>
                            </article>
                            <p>7. 회원은 이용 정지의 통지에 대하여 이의가 있을 때에는 이의신청을 할 수 있습니다. 이용제한을 해제하고자 하는 때에는 그 사유, 일시 및 기간 등을 상세하게 작성하여 고객센터 전자메일로 접수할 수 있습니다.</p>
                            <p>8. 제공자는 이용정지 기간 중에라도 이용정지 사유가 해소된 것이 확인된 경우에는 이용정지조치를 즉시 해제할 수 있습니다.</p>
                            <p>9. 제공자는 회원의 과실이 없었음을 입증된 경우에는 회원이 이용 중인 유료 상품에 대한 이용기간을 정지된 기간만큼 연장해주도록 합니다.</p>
                            <p>제12조 서비스의 탈퇴 및 청약철회</p>
                            <p>1. 서비스의 이용을 더 이상 원하지 않을 경우 언제든지 서비스 내 탈퇴하기 메뉴를 이용하여 서비스 이용계약의 청약철회(회원탈퇴)를 요청할 수 있습니다. 단, 유료 서비스를 이용하는 회원이 탈퇴할 경우, 유료 서비스 잔여 아이템 및 관련 콘텐츠는 제공자에 귀속됩니다.</p>
                            <p>2. 이용계약이 해지되면 법령 및 개인정보 취급방침에 따라 회원정보를 보유하는 경우를 제외하고는 회원정보나 작성한 게시물 등 모든 데이터는 삭제됩니다. 다만, 작성한 게시물이 제3자에 의하여 스크랩 또는 다른 공유 기능으로 게시되거나, 제3자의 게시물에 댓글 등 게시물을 추가하는 등의 경우에는 다른 회원의 정상적 서비스 이용을 위하여 필요한 범위 내에서 서비스 내에 삭제되지 않고 남아 있게 됩니다.</p>
                            <p>3. 유료 서비스를 이용하는 회원은 관련법령에 따라 청약철회 등을 할 수 있고, 이에 대하여 유료 서비스약관을 참조하시기 바랍니다.</p>
                            <p>제13조 손해배상</p>
                            <p>1. 제공자는 법령상 허용되는 한도 내에서 서비스와 관련하여 본 약관에 명시되지 않은 어떠한 구체적인 사항에 대한 약정이나 보증을 하지 않습니다.</p>
                            <p>2. 제공자는 회원이 작성하는 등의 방법으로 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 여러분의 손해에 대하여는 책임을 부담하지 않습니다.</p>
                            <p>3. 제공자는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 또한 제공자는 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적 손해, 및 징벌적 손해에 대한 책임을 부담하지 않습니다.</p>
                            <article>
                                <p>가. 천재지변 또는 이에 준하는 불가항력의 상태에서 발생한 손해</p>
                                <p>나. 여러분의 귀책사유로 서비스 이용에 장애가 발생한 경우</p>
                                <p>다. 서비스에 접속 또는 이용과정에서 발생하는 개인적인 손해</p>
                                <p>라. 제3자가 불법적으로 제공자의 서버에 접속하거나 서버를 이용함으로써 발생하는 손해</p>
                                <p>마. 제3자가 제공자 서버에 대한 전송 또는 제공자 서버로부터의 전송을 방해함으로써 발생하는 손해</p>
                                <p>바. 제3자가 악성 프로그램을 전송 또는 유포함으로써 발생하는 손해</p>
                                <p>사. 전송된 데이터의 생략, 누락, 파괴 등으로 발생한 손해, 명예훼손 등 제3자가 서비스를 이용하는 과정에서 발생된 손해</p>
                                <p>아. 기타 제공자의 고의 또는 과실이 없는 사유로 인해 발생한 손해</p>
                                <p>자. 서비스의 특성상 발생할 수 있는 손해 중 제공자가 이를 예방하기 위한 조치를 취함에도 불구하고 발생한 손해</p>
                                <p>차. 서비스의 특성상 발생할 수 있는 손해 중 사회통념 외적으로 발생한 손해</p>
                            </article>
                            <p>4. 제공자는 제공자의 중대한 귀책사유로 유료서비스를 제공하지 못 하는 경우, 공정거래위원회가 고시한 소비자분쟁해결기준에 따라 보상합니다.</p>
                            <p>제14조 면책</p>
                            <p>1. 제공자는 회원에게 서비스 제공으로부터 기대되는 수익 또는 이익을 얻지 못하는 부분과 관련하여 책임을 지지 않습니다.</p>
                            <p>2. 제공자는 제3자가 게시 또는 전송한 콘텐츠 및 자료로 인하여 회원에게 발생한 손해에 대하여 책임을 지지 않습니다.</p>
                            <p>3. 제공자는 회원 상호 간 또는 회원과 제3자 간의 서비스를 매개로 발생한 분쟁에 대하여 개입할 의무 및 손해를 배상할 책임을 지지 않습니다.</p>
                            <p>4. 제공자는 광고주의 판촉활동에 회원이 참여하거나, 거래의 결과로서 발생하는 손실 또는 손해에 대해서는 책임을 지지 않습니다.</p>
                            <p>5. 관계법령의 변경, 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우 서비스 제공에 관한 책임이 면제됩니다.</p>
                            <p>6. 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용 일체에 관여하는 책임을 지지 않습니다.</p>
                            <p>제15조 콘텐츠 및 게시물 등의 관리</p>
                            <p>1. 제공자는 건전한 온라인 통신 문화 및 효율적인 서비스 운영을 위하여 게시물 삭제, 비공개, 등록거부, 이동 등 적절한 조치를 취할 수 있습니다.</p>
                            <p>2. 제공자는 회원이 등록한 게시물이 제3자로부터 명예훼손, 지적재산권 등 권리침해를 이유로 게시중단 요청을 받을 경우 임시로 게시 중단할 수 있으며, 게시중단 요청자와 게시물 등록자 간의 소송 및 합의 기타 이에 준하는 관련기관의 결정 등이 제공자에 접수될 경우 이에 따릅니다.</p>
                            <p>제16조 서비스 제공 및 이용</p>
                            <p>1. 제공자는 인터넷과 모바일로 이용할 수 있는 다양한 서비스를 제공합니다. 스마트폰의 애플리케이션 스토어 등에서 서비스를 다운로드해 설치하거나 PC 또는 모바일 웹브라우저를 통하여 접속하여 서비스를 이용할 수 있습니다.</p>
                            <p>2. 제공자는 다양한 서비스를 시시각각 제공하기 때문에 서비스의 자세한 내용은 별도로 안내합니다. 개별적인 서비스 이용방법을 애플리케이션 스토어 및 공지사항에서 상세하게 안내하고 회원은 언제든지 확인이 가능합니다.</p>
                            <p>3. 제공자는 서비스를 자유롭게 이용할 수 있도록 이에 필요한 소프트웨어를 제공합니다. 단, 제공한 소프트웨어는 제공자 소유의 무상의 라이선스를 회원에게 제공합니다. 따라서 회원이 타인에게 해당 소프트웨어 및 라이선스를 전 세계를 대상으로 개인적인 양도는 불가능합니다. 제공자의 상표 및 로고를 사용할 권리를 부여하지는 않습니다.</p>
                            <p>4. 제공자는 더 나은 서비스를 위하여 필요한 소프트웨어의 업데이트 버전을 제공할 수 있습니다. 소프트웨어의 업데이트에는 중요한 기능의 추가 또는 불필요한 기능의 제거 등이 포함되어 있습니다. 회원은 원활한 서비스 이용을 위하여 꾸준히 서비스 업데이트를 하여야 합니다.</p>
                            <p>5. 제공자는 서비스의 이용과 관련된 각종 약관 및 공지 내용을 서비스 내 개별 메뉴를 통하여 노출하는 방식으로 안내합니다.</p>
                            <p>6. 서비스 이용 과정에서 발생하는 데이터 통신요금은 회원의 개인 비용으로 회원의 책임 하에 이동통신사에 납부 하셔야 합니다. 데이터 통신요금에 대한 자세한 안내는 가입하신 이동통신사에 문의하시기 바랍니다.</p>
                            <p>제17조 서비스 이용 방법 및 주의점</p>
                            <p>1. 잘못된 방법으로 서비스의 제공을 방해하거나 제공자가 안내하는 방법 이외의 다른 방법을 사용하여 서비스에 접근할 수 없습니다.</p>
                            <p>2. 회원정보를 무단으로 수집, 이용하거나 다른 사람들에게 제공하는 행위, 서비스를 영리 목적으로 이용하는 것, 음란 정보나 저작권 침해 정보 등 사회질서 및 법령에 위반되는 내용의 정보 등을 발송하거나 게시하는 행위도 금지됩니다.</p>
                            <p>3. 제공자의 동의 없이 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위와 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위도 금지됩니다.</p>
                            <p>4. 서비스의 이용권한, 기타 이용 계약상 지위를 타인에게 양도 및 증여할 수 없으며, 담보로 제공할 수 없습니다.</p>
                            <p>5. 제공자의 모든 약관 또는 정책 및 관련 법령을 준수하지 않는다면, 제공자는 여러분의 위반행위 등을 조사하거나 여러분의 서비스 이용을 잠시 또는 계속하여 중단하거나, 회원탈퇴 및 재가입에 제한을 둘 수 있습니다.</p>
                            <p>6. 제공자는 법령에서 정하는 기간 동안 회원이 서비스를 이용하기 위해 로그인 혹은 접속한 기록이 없는 경우 서비스 내 별도의 안내 방법으로 통지 후 여러분의 정보를 파기하거나 분리 보관할 수 있습니다.</p>
                            <p>7. 서비스 이용을 위한 필수적인 정보가 부족할 경우 이용계약이 중도 해지될 수 있습니다.</p>
                            <p>제19조 권리의 귀속 및 저작물의 이용</p>
                            <p>1. 회원은 글, 정보, 서비스 또는 제공자에 대한 의견이나 제안 등 콘텐츠(이하 ‘게시물’)를 서비스에 직접 게시할 수 있으며, 게시물 및 제휴 계약에 따라 제공된 저작물 등의 지적재산권은 작성자에게 있습니다. 제공자에서는 게시된 게시물이 타인의 지적재산권을 포함한 법률 기타 제3자의 권리침해 게시물인 사실을 확인한 경우 이를 사전 예고 없이 비공개 및 삭제하는 등의 조치를 취할 수 있는 권리를 보유합니다.</p>
                            <p>2. 게시물 업로드 시 부적절한 방법으로 시도하거나 타인의 권리침해 등의 서비스를 방해할 경우, 회원 계정에 대해 경고, 비공개, 일시 또는 영구 이용정지, 탈퇴/재가입 차단 등 회원에게 예고 없이 운영상 제재를 즉시 가할 수 있습니다.</p>
                            <p>3. 게시한 게시물의 모든 문제에 대해서는 게시자가 책임을 부담하게 됩니다. 또한, 음란하거나 폭력적이거나 기타 사회질서 및 법령에 위반하는 게시물을 공개 또는 게시할 수 없습니다.</p>
                            <p>4. 제공자는 게시물이 법령 및 서비스 정책에 위반된다고 판단할 경우, 즉시 비공개 및 삭제하거나 게시를 거부할 수 있습니다.</p>
                            <p>5. 다른 회원의 게시물을 공유 및 외부에 사용하기 위해서는 게시물 소유자에게 별도로 허락을 받아야 합니다.</p>
                            <p>제20조 법정대리인의 권리</p>
                            <p>제공자는 만 19세 미만의 미성년 회원이 유료 서비스를 이용하고자 하는 경우에 부모 등 법정 대리인의 동의를 얻거나, 계약 체결 후 추인을 얻지 않으면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있다는 내용을 고지하는 조치를 취합니다.</p>
                            <p>제21조 청소년보호책임</p>
                            <p>제공자가 제공하는 서비스는 모든 연령대가 자유롭게 이용할 수 있는 공간으로 유해 정보로부터 청소년을 보호하고 청소년의 안전한 인터넷 사용을 돕기 위해 정보통신망법에서 정한 청소년보호정책을 별도로 시행하고 있으며, 구체적인 내용은 PL@TER HELP CENTER (https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90)에서 확인할 수 있습니다.</p>
                            <p>제22조 서비스의 변경 및 종료</p>
                            <p>1. 제공자는 서비스를 24시간, 365일 제공하기 위하여 최선의 노력합니다.</p>
                            <p>2. 제공자는 장비의 유지∙보수를 위한 정기 또는 임시 점검 또는 다른 이유로 서비스의 제공이 일시 중단될 수 있으며, 관련된 공지는 서비스 내 공지합니다. 단, 제공자도 예측할 수 없는 이유로 서비스가 중단된 때에는 제공자가 상황을 파악하는 즉시 최대한 빠른 시일 내에 서비스를 복구하고, 관련 내용을 서비스 복구 후 공지하도록 노력합니다.</p>
                            <p>3. 제공자의 서비스 제공을 위해 계약한 제3자 업체와의 계약 종료 및 변경, 신규 서비스 개시 등의 사유로 서비스의 내용이 변경되거나, 서비스가 종료될 수도 있습니다. 서비스 변경 사항 또는 종료는 서비스 내 공지사항 등으로 공지합니다.</p>
                            <p>제23조 준거법 및 재판관할</p>
                            <p>1. 본 약관과 관련된 사항에 대하여 대한민국 준거법으로 합니다.</p>
                            <p>2. 제공자와 회원 간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제소합니다.</p>
                            <p>제24조 고지의 의무</p>
                            <p>본 이용약관 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 서비스 내 공지를 통하여 고지할 것입니다.</p>
                            <p>- 공고일자: 2023년 04월 01일</p>
                            <p>- 시행일자: 2023년 04월 01일</p>
                            <br></br>
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function PopUpInfo() {
        return (
            <React.Fragment>
                <div className={isPopUpInfo ? "isPopUpInfo" : "isPopUpInfo_fade"}>
                    <div className='isPopUpInfo_outContainer'>
                        <div className='isPopUpInfo_closed' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPINFO', data: !isPopUpInfo });
                        }}></div>
                        <p className='isPopUpInfo_title'>개인정보처리방침</p>
                        <article className='isPopUpInfo_article'>
                            <p>〈소소한 프로젝트〉('www.plater.kr'이하 'PL@TER')는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
                            <p>○ 이 개인정보처리방침은 2023년 4월 1부터 적용됩니다.</p>
                            <p>제1조(개인정보의 처리 목적)</p>
                            <p>〈소소한 프로젝트〉('www.plater.kr'이하 'PL@TER')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.</p>
                            <p>① 서비스 회원가입 및 관리</p>
                            <p>회원제 서비스 제공에 따른 본인 식별·인증, 서비스 부정이용 방지 목적으로 개인정보를 처리합니다.</p>
                            <p>② 재화 또는 서비스 제공</p>
                            <p>서비스 제공을 목적으로 개인정보를 처리합니다.</p>
                            <p>제2조(개인정보의 처리 및 보유 기간)</p>
                            <p>① 〈소소한 프로젝트〉는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                            <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                            <p>1. 개인정보는 수집·이용에 관한 동의일로부터까지 위 이용목적을 위하여 보유·이용됩니다.</p>
                            <article>
                                <p>1) 보유근거: 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제29조 단서</p>
                                <p>2) 관련법령: 표시/광고에 관한 기록: 1년</p>
                                <p>3) 예외사유: 이용약관 및 운영원칙에 위배되는 행위가 적발된 회원의 개인정보는 3년간 보존</p>
                            </article>
                            <p>제3조(처리하는 개인정보의 항목)</p>
                            <p>① 〈소소한 프로젝트〉는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                            <p>1. 서비스 회원가입 및 관리</p>
                            <p>1) 필수항목: 서비스 이용 기록, 접속 로그, 쿠키, 별명</p>
                            <p>2. 재화 또는 서비스 제공</p>
                            <p>1) 필수항목: 서비스 이용 기록, 접속 로그, 쿠키, 별명</p>
                            <p>제4조(만 14세 미만 아동의 개인정보 처리에 관한 사항)</p>
                            <p>① 만 14세 미만 아동에 대해 개인정보를 수집할 때 서비스 수행에 필요한 최소한의 개인정보만을 수집합니다.</p>
                            <p>② 만 14세 미만 아동의 개인정보를 수집할 때에는 아동에게 법정대리인의 성명, 연락처와 같이 최소한의 정보를 요구할 수 있으며, 다음 중 하나의 방법으로 적법한 법정대리인이 동의하였는지를 확인할 수 있습니다.</p>
                            <article>
                                <p>1. 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 개인정보처리자가 그 동의 표시를 확인했음을 법정대리인의 휴대전화 문자 메시지로 알리는 방법</p>
                                <p>2. 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 법정대리인의 신용카드·직불카드 등의 카드정보를 제공받는 방법</p>
                                <p>3. 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 법정대리인의 휴대전화 본인인증 등을 통해 본인 여부를 확인하는 방법</p>
                                <p>4. 동의 내용이 적힌 서면을 법정대리인에게 직접 발급하거나, 우편 또는 팩스를 통하여 전달하고 법정대리인이 동의 내용에 대하여 서명날인 후 제출하도록 하는 방법</p>
                                <p>5. 동의 내용이 적힌 전자우편을 발송하여 법정대리인으로부터 동의의 의사표시가 적힌 전자우편을 전송받는 방법</p>
                                <p>6. 전화를 통하여 동의 내용을 법정대리인에게 알리고 동의를 얻거나 인터넷주소 등 동의 내용을 확인할 수 있는 방법을 안내하고 재차 전화 통화를 통하여 동의를 얻는 방법</p>
                                <p>7. 그 밖에 위와 준하는 방법으로 법정대리인에게 동의 내용을 알리고 동의의 의사표시를 확인하는 방법</p>
                            </article>
                            <p>제5조(개인정보의 파기절차 및 파기방법)</p>
                            <p>① 〈소소한 프로젝트〉는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
                            <p>② 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다.</p>
                            <p>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
                            <article>
                                <p>1. 파기절차</p>
                                <p>〈소소한 프로젝트〉는 파기 사유가 발생한 개인정보를 선정하고, 〈소소한 프로젝트〉의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</p>
                                <p>2. 파기방법</p>
                                <p>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>
                            </article>
                            <p>제6조(미이용자의 개인정보 파기 등에 관한 조치)</p>
                            <p>① 〈소소한 프로젝트〉는 1년간 서비스를 이용하지 않은 이용자의 정보를 파기하고 있습니다. 다만, 다른 법령에서 정한 보존기간이 경과할 때까지 다른 이용자의 개인정보와 분리하여 별도로 저장·관리할 수 있습니다.</p>
                            <p>② 개인정보의 파기를 원하지 않으시는 경우, 기간 만료 전 서비스 로그인을 하시면 됩니다.</p>
                            <p>제7조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)</p>
                            <p>① 정보주체는 〈소소한 프로젝트〉에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
                            <p>② 제1항에 따른 권리 행사는 〈소소한 프로젝트〉에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 〈소소한 프로젝트〉는 이에 대해 지체 없이 조치하겠습니다.</p>
                            <p>③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
                            <p>④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</p>
                            <p>⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</p>
                            <p>⑥ 〈소소한 프로젝트〉는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</p>
                            <p>제8조(개인정보의  안전성 확보조치에 관한 사항) 〈소소한 프로젝트〉는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                            <p>① 내부관리계획의 수립 및 시행</p>
                            <p>개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</p>
                            <p>② 개인정보의 암호화</p>
                            <p>이용자의 개인정보와 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</p>
                            <p>제9조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)</p>
                            <p>① 〈소소한 프로젝트〉는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</p>
                            <p>② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.</p>
                            <article>
                                <p>1. 쿠키의 사용 목적: 서비스 내 안내 페이지 활성화 여부를 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</p>
                                <p>2. 쿠키의 설치•운영 및 거부: 웹브라우저 상단의 도구-인터넷 옵션-개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.</p>
                                <p>3. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</p>
                            </article>
                            <p>제13조 (개인정보 보호책임자에 관한 사항)</p>
                            <p>① 〈소소한 프로젝트〉는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의  불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                            <article>
                                <p>▶ 개인정보 보호책임자</p>
                                <p>성명: 소소한 프로젝트 운영자</p>
                                <p>연락처: </p>
                                <p>※ 개인정보 보호 담당부서로 연결됩니다.</p>
                                <p>▶ 개인정보 보호 담당부서</p>
                                <p>부서명: 없음</p>
                                <p>담당자: 소소한 프로젝트 운영자</p>
                                <p>연락처: </p>
                            </article>
                            <p>② 정보주체께서는 〈소소한 프로젝트〉의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 〈소소한 프로젝트〉는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
                            <p>제14조(개인정보의  열람청구를 접수·처리하는 부서)</p>
                            <p>정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.</p>
                            <p>〈소소한 프로젝트〉는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p>
                            <article>
                                <p>▶ 개인정보 열람청구 접수·처리 부서</p>
                                <p>부서명: 없음</p>
                                <p>담당자: 소소한 프로젝트 운영자</p>
                                <p>연락처: </p>
                            </article>
                            <p>제15조(정보주체의 권익침해에 대한 구제방법)</p>
                            <p>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</p>
                            <p>① 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</p>
                            <p>② 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</p>
                            <p>③ 대검찰청: (국번없이) 1301 (www.spo.go.kr)</p>
                            <p>④. 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</p>
                            <p>「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의  규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.</p>
                            <p>※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.</p>
                            <p>제16조(개인정보 처리방침 변경)</p>
                            <p>① 이 개인정보처리방침은 2023년 4월 1부터 적용됩니다.</p>
                            <p>② 이전의 개인정보 처리방침은 〈소소한 프로젝트〉 공식 사이트에서 확인하실 수 있습니다.</p>
                            <br></br>
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function YesAgreement() {
        return (
            <React.Fragment>
                <div className={isYesAgreement ? "isYesAgreement" : "isYesAgreement_fade"}>
                    <div className='isYesAgreement_outContainer'>
                        <p className='isYesAgreement_title'>카카오톡 알림을</p>
                        <p className='isYesAgreement_title'>받으시겠습니까?</p>
                        <p className='isYesAgreement_p'>행성 만료, 공지사항 등을</p>
                        <p className='isYesAgreement_p'>카카오톡 '나와의 채팅'으로 받을 수 있습니다.</p>
                        <div className='isYesAgreement_innerBox'>
                            <div className='isYesAgreement_button_signOut' onClick={() => {
                                alert('API 요청 필요/동의 후 다시 로그인 해주세요.');
                                agreement(process.env.REACT_APP_REST_API_KEY, process.env.REACT_APP_REDIRECT3);
                                dispatch({ type: 'CHANGE_AGREEMENT', data: !userData.agreement });
                                setRender(render + 1);
                                dispatch({ type: 'CHANGE_ISYESAGREEMENT', data: !isYesAgreement });
                            }}>동의하기</div>
                            <div className='isYesAgreement_button_cancel' onClick={() => {
                                dispatch({ type: 'CHANGE_ISYESAGREEMENT', data: !isYesAgreement });
                            }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };

    function NoAgreement() {
        return (
            <React.Fragment>
                <div className={isNoAgreement ? "isNoAgreement" : "isNoAgreement_fade"}>
                    <div className='isNoAgreement_outContainer'>
                        <p className='isNoAgreement_title'>카카오톡 알림</p>
                        <p className='isNoAgreement_title'>동의를 해제하시겠습니까?</p>
                        <p className='isNoAgreement_p'>동의 해제 시</p>
                        <p className='isNoAgreement_p'>행성 만료, 공지사항 등을 받아 볼 수 없습니다</p>
                        <div className='isNoAgreement_innerBox'>
                            <div className='isNoAgreement_button_signOut' onClick={() => {
                                alert('API 요청 필요');
                                dispatch({ type: 'CHANGE_AGREEMENT', data: !userData.agreement });
                                setRender(render - 1);
                                dispatch({ type: 'CHANGE_ISNOAGREEMENT', data: !isNoAgreement });
                            }}>동의 해제하기</div>
                            <div className='isNoAgreement_button_cancel' onClick={() => {
                                dispatch({ type: 'CHANGE_ISNOAGREEMENT', data: !isNoAgreement });
                            }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function MembershipWithdrawal() {
        return (
            <React.Fragment>
                <div className={isMembershipWithdrawal ? "membershipWithdrawal" : "membershipWithdrawal_fade"}>
                    <div className='membershipWithdrawal_outContainer'>
                        <p className='membershipWithdrawal_title'>서비스를 탈퇴..</p>
                        <p className='membershipWithdrawal_title'>하시겠습니까?</p>
                        <p className='membershipWithdrawal_p'>탈퇴 시 그동안 저장된 데이터는</p>
                        <p className='membershipWithdrawal_p'>모두 삭제되며 복구할 수 없어요.</p>
                        <div className='membershipWithdrawal_innerBox'>
                            <div className='membershipWithdrawal_button_signOut' onClick={() => { alert('아직 서비스 준비 중입니다.') }}>탈퇴하기</div>
                            <div className='membershipWithdrawal_button_cancel' onClick={() => { dispatch({ type: 'CHANGE_ISMEMBERSHIPWITHDRAWAL', data: !isMembershipWithdrawal }); }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function PopUPLogOut() {
        return (
            <React.Fragment>
                <div className={isPopUpLogOut ? "isPopUpLogOut" : "isPopUpLogOut_fade"}>
                    <div className='isPopUpLogOut_outContainer'>
                        <p className='isPopUpLogOut_title'>로그아웃..</p>
                        <p className='isPopUpLogOut_title'>하시겠습니까?</p>
                        <p className='isPopUpLogOut_p'>로그아웃 해도 남은 시간은 지나</p>
                        <p className='isPopUpLogOut_p'>갑니다. 다녀오세요!</p>
                        <div className='isPopUpLogOut_innerBox'>
                            <div className='isPopUpLogOut_button_signOut' onClick={() => { logoutWithKakao(process.env.REACT_APP_REST_API_KEY, process.env.REACT_APP_REDIRECT2); }}>로그아웃</div>
                            <div className='isPopUpLogOut_button_cancel' onClick={() => { setIsPopUpLogOut(!isPopUpLogOut); }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function toggleMenu() {
        if (isInner === false) {
            dispatch({ type: 'CHANGE_ISMENU', data: !isMenu });
            dispatch({ type: 'CHANGE_ISINNER', data: false });
            dispatch({ type: 'CHANGE_ISMYPAGE', data: false });
            dispatch({ type: 'CHANGE_ISPLATER', data: false });
            dispatch({ type: 'CHANGE_ISHOWTO', data: false });
        } else if (isInner === true) {
            dispatch({ type: 'CHANGE_ISINNER', data: false });
            dispatch({ type: 'CHANGE_ISMYPAGE', data: false });
            dispatch({ type: 'CHANGE_ISPLATER', data: false });
            dispatch({ type: 'CHANGE_ISHOWTO', data: false });
        };
    };

    function toggleMypage() {
        dispatch({ type: 'CHANGE_ISINNER', data: !isInner });
        dispatch({ type: 'CHANGE_ISMYPAGE', data: !isMypage });
    };

    function togglePlanetter() {
        dispatch({ type: 'CHANGE_ISINNER', data: !isInner });
        dispatch({ type: 'CHANGE_ISPLATER', data: !isPlater });
    };

    function toggleHowto() {
        dispatch({ type: 'CHANGE_ISINNER', data: !isInner });
        dispatch({ type: 'CHANGE_ISHOWTO', data: !isHowto });
    };

    function logoutWithKakao(key, url) {
        window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${key}&logout_redirect_uri=${url}`;
    };

    function agreement(key, url) {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${url}&response_type=code&scope=talk_message`;
    };

    return (
        <React.Fragment>
            <div className={isMenu ? "menu_wrap" : ""}>
                <div className={isMenu ? "menu_wrap2" : ""} onClick={toggleMenu}></div>
                <MembershipWithdrawal></MembershipWithdrawal>
                <PopUPLogOut></PopUPLogOut>
                <div className="menu_outContainer">
                    <div className={`menu_img${isMenu ? "_active" : ""}${isMypage || isPlater || isHowto ? "_plus" : ""}`} onClick={toggleMenu}></div>
                </div>
                <div className={`menu_bar${isMenu ? "_active" : ""}${isInner ? "_wide" : ""}`}>
                    <div className={isInner ? "menu_bar_inner_true" : "menu_bar_inner"}>
                        <span className='menu_bar_icon_1'></span><p onClick={toggleMypage}>마이페이지</p>
                        <span className='menu_bar_icon_2'></span><p onClick={togglePlanetter}>Pl@ter</p>
                        <span className='menu_bar_icon_3'></span><p onClick={toggleHowto} >이용 방법</p>
                        <span className='menu_bar_icon_4'></span>
                        <a className='go_to_notion' href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' rel="noopener noreferrer" target={'_blank'}>
                            <p>Contact Us</p></a>
                    </div>
                    <div className={isMypage ? "menu_bar_mypage" : "menu_bar_mypage_true"}>
                        <YesAgreement></YesAgreement>
                        <NoAgreement></NoAgreement>
                        <PopUpHowTo></PopUpHowTo>
                        <PopUpInfo></PopUpInfo>
                        <div className='menu_bar_mypage_box1'>
                            <p className='menu_bar_mypage_box1_p'>안녕하세요!</p>
                            <div></div>
                            <p className='menu_bar_mypage_box1_p'>{userData.nickname} 님</p>
                            <div className='menu_bar_mypage_box1_innerBox'>
                                <div className='menu_bar_mypage_box1_logout' onClick={() => { setIsPopUpLogOut(!isPopUpLogOut); }}>로그아웃</div>
                            </div>
                        </div>
                        <div className='menu_bar_mypage_line1'></div>
                        <div className='menu_bar_mypage_box2'>
                            <p className='menu_bar_mypage_box2_p'>카카오톡 알림</p>
                            <div className='menu_bar_mypage_box2_innerBox'>
                                <div className='menu_bar_mypage_box2_notice' onClick={() => {
                                    if (userData.agreement === true) {
                                        dispatch({ type: 'CHANGE_ISNOAGREEMENT', data: !isNoAgreement });
                                    } else {
                                        dispatch({ type: 'CHANGE_ISYESAGREEMENT', data: !isYesAgreement });
                                    };
                                }}><div className={userData.agreement ? 'menu_bar_mypage_box2_notice_inner_active' : 'menu_bar_mypage_box2_notice_inner'}></div></div>
                            </div>
                        </div>
                        <div className='menu_bar_mypage_line2'></div>
                        <p className='menu_bar_mypage_box_p' onClick={() => { dispatch({ type: 'CHANGE_ISMEMBERSHIPWITHDRAWAL', data: !isMembershipWithdrawal }); }}>회원탈퇴</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPHOWTO', data: !isPopUpHowTo });
                        }}>이용약관</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPINFO', data: !isPopUpInfo });
                        }}>개인정보처리방침</p>
                        <div className='menu_bar_mypage_line'></div>
                        <a className='go_to_notion' href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' rel="noopener noreferrer" target={'_blank'}><p style={{ marginTop: '-1.8rem' }} className='menu_bar_mypage_box_p'>문의하기</p></a>
                    </div>
                    <div className={isPlater ? "menu_bar_planetter" : "menu_bar_planetter_true"}>
                        <article className='menu_plater_page'>
                            <h5>삐삐-</h5>
                            <p>지구와 교신 중…</p>
                            <div className='menu_plater_img_outContainer'>
                                <img className='menu_plater_img' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/detail/pl@ter_main.jpg?raw=true'></img>
                            </div>
                            <h5>광활한 인터넷 우주 속</h5>
                            <h5>감성 충만한 편지를 보내고 싶다면,</h5>
                            <h5>PL@TER</h5>
                            <div className='menu_plater_img_outContainer'>
                                <img className='menu_plater_img_1' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/detail/pl@ter_main_2.gif?raw=true'></img>
                            </div>
                            <p>도착까지 D-10</p>
                            <h5>모든 행성의 편지가 도착하기까지는</h5>
                            <h5>10일의 시간이 소요돼요.</h5>
                            <h5>링크를 복사해 편지를 모으거나 기대하며</h5>
                            <h5>기다리다 보면 멋진 편지가 도착할 거예요!</h5>
                            <div className='menu_plater_img_outContainer'>
                                <img className='menu_plater_img_1' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/detail/pl@ter_main_3.gif?raw=true'></img>
                            </div>
                            <p>세상에 단 하나밖에 없는 편지</p>
                            <h5>다양한 폰트부터 편지지, 스티커를 통해</h5>
                            <h5>당신만의 멋진 편지를 만들어보세요!</h5>
                            <div className='menu_palter_bottom_pading'></div>
                            <p>자세한 이용 방법이</p>
                            <p>궁금하다면 이쪽으로!</p>
                            <a style={{ textDecoration: 'none' }} href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' rel="noopener noreferrer" target={'_blank'}><div className='menu_palter_bottom_button'>
                                이용방법 알아보기</div></a>
                            <div className='menu_palter_bottom_pading_2'></div>
                            <br></br>
                            <br></br>
                        </article>
                    </div>
                    <div className={isHowto ? "menu_bar_howto" : "menu_bar_howto_true"}>
                        <article className='menu_howto_page'>
                            <p className='howto_title'>편지함 개설 방법</p>
                            <p className='howto_p'>행성을 개설해볼까요?</p>
                            <div className='menu_plater_img_outContainer'>
                                <Slider {...settings} dotsClass="newClass">
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img_2' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/howto/howto_1_1.png?raw=true'></img>
                                        <p className='howto_slick_title'>행성 만들기</p>
                                        <p className='howto_slick_p'>카카오 ID로 회원가입(로그인)을 한 다음</p>
                                        <p className='howto_slick_p'>행성 개설 버튼을 클릭해요.</p>
                                    </div>
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img_2' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/howto/howto_1_2.png?raw=true'></img>
                                        <p className='howto_slick_title'>*주의*</p>
                                        <p className='howto_slick_p'>행성의 시작 시간은 현재 시각으로만</p>
                                        <p className='howto_slick_p'>설정됩니다. 시작 시간과 마감 시간을</p>
                                        <p className='howto_slick_p'>꼭 확인해주세요!</p>
                                    </div>
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img_2' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/howto/howto_1_3.png?raw=true'></img>
                                        <p className='howto_slick_title'>10일 기다리기</p>
                                        <p className='howto_slick_p'>행성을 만들었다면 상단의 공유 버튼을 통해</p>
                                        <p className='howto_slick_p'>가족과 친구, 우주의 누군가에게 신호를 보내세요.</p>
                                        <p className='howto_slick_p'>10일 간 멋진 편지를 모집해보세요.</p>
                                    </div>
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img_2' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/howto/howto_1_4.png?raw=true'></img>
                                        <p className='howto_slick_title'>편지 확인하기</p>
                                        <p className='howto_slick_p'>열흘 후에는 편지가 모두 개봉돼요.</p>
                                        <p className='howto_slick_p'>홈 화면의 우표를 클릭하면 열어볼 수 있어요.</p>
                                    </div>
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img_2' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/howto/howto_1_5.png?raw=true'></img>
                                        <p className='howto_slick_title'>새로운 행성 만들기</p>
                                        <p className='howto_slick_p'>새로운 행성을 만들면 이전 행성은 자동 삭제돼요.</p>
                                        <p className='howto_slick_p'>복구할 수 없으니 신중히 결정하세요!</p>
                                    </div>
                                </Slider>
                                <div className='howto_div_margin'></div>
                                <Slider {...settings} dotsClass="newClass">
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img_2' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/howto/howto_2_1.png?raw=true'></img>
                                        <p className='howto_slick_title'>편지 작성하기</p>
                                        <p className='howto_slick_p'>편지를 작성하고 꾸미기 버튼을 눌러</p>
                                        <p className='howto_slick_p'>마음껏 편지를 장식하세요.</p>
                                    </div>
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img_2' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/howto/howto_2_2.png?raw=true'></img>
                                        <p className='howto_slick_title'>우표 붙이고 전송하기</p>
                                        <p className='howto_slick_p'>장식을 끝마친 편지에</p>
                                        <p className='howto_slick_p'>마음에 드는 우표를 붙여 전송하세요!</p>
                                    </div>
                                </Slider>
                            </div>
                            <div className='howto_div_margin'></div>
                            <p className='howto_p'>다른 궁금한 정보가</p>
                            <p className='howto_p'>있으신가요?</p>
                            <a style={{ textDecoration: 'none' }} href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' rel="noopener noreferrer" target={'_blank'}><div className='menu_palter_bottom_button'>
                                홈페이지 방문하기</div></a>
                            <div className='menu_palter_bottom_pading_2'></div>
                            <br></br>
                            <br></br>
                        </article>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Menu;