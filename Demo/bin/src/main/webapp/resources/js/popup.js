/*******************************************************
 * Common Popup !!
********************************************************/
/*******************************************************
 * 고객사 찾기 공통 PopUp !!
 * 
 * @description Customer List PopUp
 *******************************************************/
function gf_commCustListPop(obj){
    gf_openPop("/common/initialCommCustListPop.do", 900, "", obj);     // Dialog Open
}

function gf_searchCommCustListPop(pageNo){
    gf_send("/common/searchCommCustListPop.do", gf_searchParam(pageNo, "searchAreaPop"));
}

function searchCommCustListPopAfter(data){
    var listObj = data.listInfo;
    
    var bodyHtml = "";
    
    for(var i=0; i<listObj.length; i++){
        var no           = listObj[i].NO;
        var cdCompany    = listObj[i].CD_COMPANY;     // 회사 코드
        var nmCompany    = listObj[i].NM_COMPANY;     // 회사 명
        var cdPartner    = listObj[i].CD_PARTNER;     // 거래처 코드
        var lnPartner    = listObj[i].LN_PARTNER;     // 거래처명
        var nmCeo        = listObj[i].NM_CEO;         // 대표자명
        var noCompany    = listObj[i].NO_COMPANY;     // 사업자등록번호
        var clsPartner   = listObj[i].CLS_PARTNER;    // 거래처분류
        var fgPartner    = listObj[i].FG_PARTNER;     // 거래처구분
        var clsPartnerNm = listObj[i].CLS_PARTNER_NM; // 거래처분류 명
        var fgPartnerNm  = listObj[i].FG_PARTNER_NM;  // 거래처구분 명
        
        
        bodyHtml += '<tr OnDblClick="commCustListPopTrClick(this);">';
        bodyHtml += '    <td title="' + no           + '" class="tc list ellipsis">' + no           + '</td>';    // No
        bodyHtml += '    <td title="' + nmCompany    + '" class="tl list ellipsis">' + nmCompany    + '</td>';    // 회사 명
        bodyHtml += '    <td title="' + cdPartner    + '" class="tc list ellipsis">' + cdPartner    + '</td>';    // 거래처 코드
        bodyHtml += '    <td title="' + lnPartner    + '" class="tl list ellipsis">' + lnPartner    + '</td>';    // 거래처명
        bodyHtml += '    <td title="' + nmCeo        + '" class="tc list ellipsis">' + nmCeo        + '</td>';    // 대표자명
        bodyHtml += '    <td title="' + noCompany    + '" class="tc list ellipsis">' + noCompany    + '</td>';    // 사업자등록번호
        bodyHtml += '    <td title="' + clsPartnerNm + '" class="tc list ellipsis">' + clsPartnerNm + '</td>';    // 거래처분류 명
        bodyHtml += '    <td title="' + fgPartnerNm  + '" class="tc list ellipsis">' + fgPartnerNm  + '</td>';    // 거래처구분 명
        bodyHtml += '</tr>';
    }
    
    var args = new Object();
    
    args.targetId     = "commCustListPop";             // 결과 값 DIV id
    args.bodyHtml     = bodyHtml;                      // 결과 HTML
    args.pageInfo     = data.pageInfo;                 // Page Information
    args.pageFunction = "gf_searchCommCustListPop";    // Page Link Function : Search Function !!
    args.gridPageInfo = "gridPageInfoCommPop";
    
    gf_makeListHtml(args);
}



/*******************************************************
 * 사원 찾기 공통 PopUp !!
 * 
 * @description Employee List PopUp
 *******************************************************/
function gf_commEmpListPop(obj){
    gf_openPop("/common/initialCommEmpListPop.do", 800, "", obj);     // Dialog Open
}

function gf_searchCommEmpListPop(pageNo){
    gf_send("/common/searchCommEmpListPop.do", gf_searchParam(pageNo, "searchAreaPop"));
}

function searchCommEmpListPopAfter(data){
    var listObj = data.listInfo;
    
    var bodyHtml = "";
    
    for(var i=0; i<listObj.length; i++){
        var no          = listObj[i].NO;
        var cdCompany   = listObj[i].CD_COMPANY;      // 회사 코드
        var nmCompany   = listObj[i].NM_COMPANY;      // 회사 명
        var pathSaleorg = listObj[i].PATH_SALEORG;    // 조직 Path
        var cdSaleorg   = listObj[i].CD_SALEORG;      // 상위 조직
        var cdSalegrp   = listObj[i].CD_SALEGRP;      // 영업 그룹 코드
        var noEmp       = listObj[i].NO_EMP;          // 사번
        var nmKor       = listObj[i].NM_KOR;          // 한글 이름
        var nmDutyStep  = listObj[i].NM_DUTY_STEP;    // 직위 명
        
        bodyHtml += '<tr OnDblClick="commEmpListPopTrClick(this);">';
        bodyHtml += '    <td title="' + no          + '" class="tc list ellipsis">' + no;
        bodyHtml += '        <input id="cdSaleorg" name="cdSaleorg" type="hidden" value="' + cdSaleorg + '" />';
        bodyHtml += '        <input id="cdSalegrp" name="cdSalegrp" type="hidden" value="' + cdSalegrp + '" />';
        bodyHtml += '    </td>';
        bodyHtml += '    <td title="' + nmCompany   + '" class="tl list ellipsis">' + nmCompany   + '</td>';
        bodyHtml += '    <td title="' + pathSaleorg + '" class="tl list ellipsis">' + pathSaleorg + '</td>';
        bodyHtml += '    <td title="' + noEmp       + '" class="tc list ellipsis">' + noEmp       + '</td>';
        bodyHtml += '    <td title="' + nmKor       + '" class="tc list ellipsis">' + nmKor       + '</td>';
        bodyHtml += '    <td title="' + nmDutyStep  + '" class="tc list ellipsis">' + nmDutyStep  + '</td>';
        bodyHtml += '</tr>';
    }
    
    var args = new Object();
    
    args.targetId     = "commEmpListPop";             // 결과 값 DIV id
    args.bodyHtml     = bodyHtml;                     // 결과 HTML
    args.pageInfo     = data.pageInfo;                // Page Information
    args.pageFunction = "gf_searchCommEmpListPop";    // Page Link Function : Search Function !!
    args.gridPageInfo = "gridPageInfoCommPop";
    
    gf_makeListHtml(args);
}



/*******************************************************
 * 프로젝트 찾기 공통 PopUp !!
 * 
 * @description Project List PopUp
 *******************************************************/
function gf_commPrjtListPop(obj){
    gf_openPop("/common/initialCommPrjtListPop.do", 800, "", obj);     // Dialog Open
}

function gf_searchCommPrjtListPop(pageNo){
    gf_send("/common/searchCommPrjtListPop.do", gf_searchParam(pageNo, "searchAreaPop"));
}

function searchCommPrjtListPopAfter(data){
    var listObj = data.listInfo;
    
    var bodyHtml = "";
    
    for(var i=0; i<listObj.length; i++){
        var no         = listObj[i].NO;              // 순번
        var corpCd     = listObj[i].CORP_CD;         // 회사 코드
        var corpNm     = listObj[i].CORP_NM;         // 회사 명
        var prjtNo     = listObj[i].PRJT_NO;         // 프로젝트 번호
        var prjtNoView = listObj[i].PRJT_NO_VIEW;    // 프로젝트 번호
        var prjtSeq    = listObj[i].PRJT_SEQ;        // 프로젝트 차수
        var prjtNm     = listObj[i].PRJT_NM;         // 프로젝트 명
        var cnttDt     = listObj[i].CNTT_DT;         // 계약 일자 = 수주 일자
        var sttsNm     = listObj[i].STTS_NM;         // 진행 상태
        
        bodyHtml += '<tr OnDblClick="commPrjtListPopTrClick(this);">';
        bodyHtml += '    <td title="' + no     + '" class="tc list ellipsis">' + no;
        bodyHtml += '        <input id="corpCd"  name="corpCd"  type="hidden" value="' + corpCd  + '" />';
        bodyHtml += '        <input id="prjtNo"  name="prjtNo"  type="hidden" value="' + prjtNo  + '" />';
        bodyHtml += '        <input id="prjtSeq" name="prjtSeq" type="hidden" value="' + prjtSeq + '" />';
        bodyHtml += '    </td>';
        bodyHtml += '    <td title="' + corpNm     + '" class="tl list ellipsis">' + corpNm     + '</td>';
        bodyHtml += '    <td title="' + prjtNoView + '" class="tc list ellipsis">' + prjtNoView + '</td>';
        bodyHtml += '    <td title="' + prjtNm     + '" class="tl list ellipsis">' + prjtNm     + '</td>';
        bodyHtml += '    <td title="' + cnttDt     + '" class="tc list ellipsis">' + cnttDt     + '</td>';
        bodyHtml += '    <td title="' + sttsNm     + '" class="tc list ellipsis">' + sttsNm     + '</td>';
        bodyHtml += '</tr>';
    }
    
    var args = new Object();
    
    args.targetId     = "commPrjtListPop";            // 결과 값 DIV id
    args.bodyHtml     = bodyHtml;                     // 결과 HTML
    args.pageInfo     = data.pageInfo;                // Page Information
    args.pageFunction = "gf_searchCommPrjtListPop";   // Page Link Function : Search Function !!
    args.gridPageInfo = "gridPageInfoCommPop";
    
    gf_makeListHtml(args);
}



/*******************************************************
 * ITEM 찾기 공통 PopUp !!
 * 
 * @description item List PopUp
 *******************************************************/
function gf_commItemListPop(obj){
    gf_openPop("/common/initialCommItemListPop.do", 850, "", obj);     // Dialog Open
}

function gf_searchCommItemListPop(pageNo){
    gf_send("/common/searchCommItemListPop.do", gf_searchParam(pageNo, "searchAreaPop"));
}

function searchCommItemListPopAfter(data){
    var listObj = data.listInfo;
    
    var bodyHtml = "";
    
    for(var i=0; i<listObj.length; i++){
        var no       = listObj[i].NO;          // No
        var cdItem   = listObj[i].CD_ITEM;     // 아이템 코드
        var nmItem   = listObj[i].NM_ITEM;     // 아이템 명
        var nmPlant  = listObj[i].NM_PLANT;    // 공장 명
        var clsLnm   = listObj[i].CLS_LNM;     // 대분류
        var clsMnm   = listObj[i].CLS_MNM;     // 중분류
        var clsSnm   = listObj[i].CLS_SNM;     // 소분류
        var dtValid  = listObj[i].DT_VALID;    // 유효일자
        var unitIm   = listObj[i].UNIT_IM;     // 단위
        var stndItem = listObj[i].STND_ITEM;   // 규격
        var tpPart   = listObj[i].TP_PART;     // 내외자 구분(V:외자,P:내자)
        var tpPartNm = listObj[i].TP_PART_NM;  // 내외자 구분(V:외자,P:내자)
        
        bodyHtml += '<tr OnDblClick="commItemListPopTrClick(this);">';
        bodyHtml += '    <td title="' + no       + '" class="tc list ellipsis">' + no;
        bodyHtml += '        <input id="tpPart"  name="tpPart"  type="hidden" value="' + tpPart + '" />';
        bodyHtml += '    </td>';    // No
        bodyHtml += '    <td title="' + cdItem   + '" class="tl list ellipsis">' + cdItem   + '</td>';    // 아이템 코드
        bodyHtml += '    <td title="' + nmItem   + '" class="tl list ellipsis">' + nmItem   + '</td>';    // 아이템 명
        bodyHtml += '    <td title="' + stndItem + '" class="tc list ellipsis">' + stndItem + '</td>';    // 규격
        bodyHtml += '    <td title="' + unitIm   + '" class="tc list ellipsis">' + unitIm   + '</td>';    // 단위
        bodyHtml += '    <td title="' + nmPlant  + '" class="tc list ellipsis">' + nmPlant  + '</td>';    // 공장 명
        bodyHtml += '    <td title="' + tpPartNm + '" class="tc list ellipsis">' + tpPartNm + '</td>';    // 내외자 구분(V:외자,P:내자)
        bodyHtml += '    <td title="' + clsLnm   + '" class="tl list ellipsis">' + clsLnm   + '</td>';    // 대분류
        bodyHtml += '    <td title="' + clsMnm   + '" class="tl list ellipsis">' + clsMnm   + '</td>';    // 중분류
        bodyHtml += '    <td title="' + clsSnm   + '" class="tl list ellipsis">' + clsSnm   + '</td>';    // 소분류
      //bodyHtml += '    <td title="' + dtValid  + '" class="tc list ellipsis">' + dtValid  + '</td>';    // 유효일자
        bodyHtml += '</tr>';
    }
    
    var args = new Object();
    
    args.targetId     = "commItemListPop";            // 결과 값 DIV id
    args.bodyHtml     = bodyHtml;                     // 결과 HTML
    args.pageInfo     = data.pageInfo;                // Page Information
    args.pageFunction = "gf_searchCommItemListPop";   // Page Link Function : Search Function !!
    args.gridPageInfo = "gridPageInfoCommPop";
    
    gf_makeListHtml(args);
}

/*******************************************************
 * 영업조직 공통 PopUp !!
 * 
 * @description item List PopUp
 *******************************************************/
function gf_commSaleOrgListPop(obj){
    gf_openPop("/common/initialCommSaleOrgListPop.do", 320, "", obj);     // Dialog Open
}

function gf_searchCommSaleOrgListPop(){
    $("#searchAreaPop #pCorpNm").val($("#searchAreaPop #pCorpCd option:selected").text());
    
    gf_send("/common/searchCommSaleOrgListPop.do", gf_searchParam("", "searchAreaPop"));
}

function searchCommSaleOrgListPopAfter(data){
    // simpleData Tree
    var setting = { view : { showIcon: gf_showIconForTree }
                   ,data : { simpleData: { enable: true } }
                   ,callback : { onClick: gf_ztreeOnClick }
                  };
    
    var zNodes  = [];
    
    // 최상단 노드
    zNodes.push({ id:"", pId:"", name:data.corpNm, open:true });
    
    
    var listObj = data.listInfo;
    
    for(var i=0; i<listObj.length; i++){
        var id     = listObj[i].CD_ID;
        var upprId = listObj[i].UPPR_CD_ID;
        var nm     = listObj[i].CD_NM;
        var lvl    = listObj[i].LVL;
        var pathId = listObj[i].PATH_ID;
        var pathNm = listObj[i].PATH_NM;
        var isLeaf = listObj[i].IS_LEAF;
        
        zNodes.push({ id:id, pId:upprId, name:nm, lvl:lvl, pathId:pathId, pathNm:pathNm, isLeaf:isLeaf, open:true });
    }
    
    $.fn.zTree.init($("#ztreeViewSaleOrg"), setting, zNodes);
}

/*******************************************************
 * 품목군 공통 PopUp !!
 * 
 * @description item List PopUp
 *******************************************************/
function gf_commGrpItemListPop(obj){
    gf_openPopRemain("/common/initialCommGrpItemListPop.do", 320, "", obj);     // Dialog Open
}

function gf_searchCommGrpItemListPop(){
    $("#searchAreaPopRemain #pCorpNm").val($("#searchAreaPopRemain #pCorpCd option:selected").text());
    
    gf_send("/common/searchCommGrpItemListPop.do", gf_searchParam("", "searchAreaPopRemain"));
}

function searchCommGrpItemListPopAfter(data){
    // simpleData Tree
    var setting = { view : { showIcon: gf_showIconForTree }
                   ,check: { enable: true }
                   ,data : { simpleData: { enable: true } }
                   ,callback: { beforeClick: gf_ztreeBeforeClickGrpItem, onCheck: gf_ztreeOnCheck }
                  };
    
    var zNodes  = [];
    
    // 최상단 노드
    zNodes.push({ id:"", pId:"", name:data.corpNm, open:true });
    
    
    var listObj = data.listInfo;
    
    for(var i=0; i<listObj.length; i++){
        var id     = listObj[i].CD_ID;
        var upprId = listObj[i].UPPR_CD_ID;
        var nm     = listObj[i].CD_NM;
        var lvl    = listObj[i].LVL;
        var pathId = listObj[i].PATH_ID;
        var pathNm = listObj[i].PATH_NM;
        var isLeaf = listObj[i].IS_LEAF;
        
        zNodes.push({ id:id, pId:upprId, name:nm, lvl:lvl, pathId:pathId, pathNm:pathNm, isLeaf:isLeaf, open:true });
    }
    
    $.fn.zTree.init($("#ztreeViewGrpItem"), setting, zNodes);
}

function gf_ztreeBeforeClickGrpItem(treeId, treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("ztreeViewGrpItem");
    
    zTree.checkNode(treeNode, !treeNode.checked, null, true);
    
    return false;
}

function gf_showIconForTree(treeId, treeNode) {
    return !treeNode.isParent;
};
