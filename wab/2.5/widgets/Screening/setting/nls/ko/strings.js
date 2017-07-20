///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "standardUnit": "표준 단위",
    "metricUnit": "미터법 단위"
  },
  "analysisTab": {
    "analysisTabLabel": "분석",
    "selectAnalysisLayerLabel": "분석 레이어 선택",
    "addLayerLabel": "레이어 추가",
    "noValidLayersForAnalysis": "선택한 웹 맵에서 유효한 레이어를 찾을 수 없습니다.",
    "noValidFieldsForAnalysis": "선택한 웹 맵에서 유효한 필드를 찾을 수 없습니다. 선택한 레이어를 제거하세요.",
    "addLayersHintText": "힌트: 보고서에서 분석하고 표시할 레이어와 필드를 선택합니다.",
    "addLayerNameTitle": "레이어 이름",
    "addFieldsLabel": "필드 추가",
    "addFieldsPopupTitle": "필드 선택",
    "addFieldsNameTitle": "필드 이름",
    "aoiToolsLegendLabel": "AOI 도구",
    "aoiToolsDescriptionLabel": "관심 영역을 생성하고 해당 레이블을 지정할 도구 활성화",
    "placenameLabel": "장소 이름",
    "drawToolsLabel": "그리기 도구",
    "uploadShapeFileLabel": "쉐이프파일 업로드",
    "coordinatesLabel": "좌표",
    "coordinatesDrpDwnHintText": "힌트: 입력한 트래버스를 표시할 단위를 선택합니다.",
    "coordinatesBearingDrpDwnHintText": "힌트: 입력한 트래버스를 표시할 방위각을 선택합니다.",
    "allowShapefilesUploadLabel": "분석에 쉐이프파일 업로드 허용",
    "areaUnitsLabel": "면적/길이 보기 단위",
    "allowShapefilesUploadLabelHintText": "힌트: 보고서 탭에서 '분석에 쉐이프파일 업로드'를 표시합니다.",
    "maxFeatureForAnalysisLabel": "분석할 최대 피처 수",
    "maxFeatureForAnalysisHintText": "힌트: 분석할 최대 피처 수를 설정합니다.",
    "searchToleranceLabelText": "톨러런스 검색(피트)",
    "searchToleranceHint": "힌트: 톨러런스 검색은 포인트 및 라인 입력을 분석할 때만 사용됩니다."
  },
  "downloadTab": {
    "downloadLegend": "다운로드 설정",
    "reportLegend": "보고서 설정",
    "downloadTabLabel": "다운로드",
    "syncEnableOptionLabel": "피처 레이어",
    "syncEnableOptionHint": "힌트: 지정된 형식의 관심 영역을 교차하는 피처의 피처 정보를 다운로드하는 데 사용됩니다.",
    "syncEnableOptionNote": "참고 사항: 파일 지오데이터베이스 옵션을 사용하려면 동기화가 활성화된 피처 서비스가 필요합니다.",
    "extractDataTaskOptionLabel": "데이터 추출 작업(Extract Data Task) 지오프로세싱 서비스",
    "extractDataTaskOptionHint": "힌트: 발행된 데이터 추출 작업(Extract Data Task) 지오프로세싱 서비스를 사용하여 파일 지오데이터베이스 또는 쉐이프파일 형식의 관심 영역을 교차하는 피처를 다운로드할 수 있습니다.",
    "cannotDownloadOptionLabel": "다운로드 비활성화",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "레이어 이름",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "파일 지오데이터베이스",
      "allowDownloadLabel": "다운로드 허용"
    },
    "setButtonLabel": "설정",
    "GPTaskLabel": "지오프로세싱 서비스의 URL 지정",
    "printGPServiceLabel": "인쇄 서비스 URL",
    "setGPTaskTitle": "필수 지오프로세싱 서비스 URL 지정",
    "logoLabel": "로고",
    "logoChooserHint": "힌트: 이미지를 변경하려면 이미지 아이콘을 클릭합니다.",
    "footnoteLabel": "각주",
    "columnTitleColorPickerLabel": "열 제목의 색상",
    "reportTitleLabel": "보고서 제목",
    "errorMessages": {
      "invalidGPTaskURL": "지오프로세싱 서비스가 잘못되었습니다. 데이터 추출 작업(Extract Data Task)이 포함된 지오프로세싱 서비스를 선택하세요.",
      "noExtractDataTaskURL": "데이터 추출 작업(Extract Data Task)이 포함된 임의의 지오프로세싱 서비스를 선택하세요."
    }
  },
  "generalTab": {
    "generalTabLabel": "일반",
    "tabLabelsLegend": "패널 레이블",
    "tabLabelsHint": "힌트: 레이블을 지정합니다.",
    "AOITabLabel": "관심 영역 패널",
    "ReportTabLabel": "보고서 패널",
    "bufferSettingsLegend": "버퍼 설정",
    "defaultBufferDistanceLabel": "기본 버퍼 거리",
    "defaultBufferUnitsLabel": "버퍼 단위",
    "generalBufferSymbologyHint": "힌트: 정의된 관심 영역 주위에서 버퍼를 보려는 경우에 사용할 심볼을 설정합니다.",
    "aoiGraphicsSymbologyLegend": "AOI 그래픽 심볼",
    "aoiGraphicsSymbologyHint": "힌트: 포인트, 라인 및 폴리곤 관심 영역을 정의하는 중에 사용할 심볼을 설정합니다.",
    "pointSymbologyLabel": "포인트",
    "previewLabel": "미리 보기",
    "lineSymbologyLabel": "라인",
    "polygonSymbologyLabel": "폴리곤",
    "aoiBufferSymbologyLabel": "버퍼 심볼",
    "pointSymbolChooserPopupTitle": "주소 또는 위치 심볼",
    "polygonSymbolChooserPopupTitle": "폴리곤을 강조할 심볼 선택",
    "lineSymbolChooserPopupTitle": "라인을 강조할 심볼 선택",
    "aoiSymbolChooserPopupTitle": "버퍼 심볼 설정"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "원본 설정 검색",
    "searchSourceSettingTitle": "원본 설정 검색",
    "searchSourceSettingTitleHintText": "지오코드 서비스 또는 피처 레이어를 추가하여 검색 원본으로 구성합니다. 이와 같은 지정된 원본에 따라 검색 상자 내에서 검색 가능한 항목이 결정됩니다.",
    "addSearchSourceLabel": "검색 원본 추가",
    "featureLayerLabel": "피처 레이어",
    "geocoderLabel": "지오코더",
    "generalSettingLabel": "일반 설정",
    "allPlaceholderLabel": "모두 검색하기 위한 플레이스 홀더 텍스트:",
    "allPlaceholderHintText": "힌트: 모든 레이어와 지오코더를 검색하는 동안 플레이스 홀더로 나타낼 텍스트를 입력합니다.",
    "generalSettingCheckboxLabel": "발견한 피처 또는 위치에 대해 팝업 보기",
    "countryCode": "국가 또는 지역 코드",
    "countryCodeEg": "예시: ",
    "countryCodeHint": "이 값을 비워 두면 모든 국가와 지역이 검색됩니다.",
    "questionMark": "?",
    "searchInCurrentMapExtent": "현재 맵 범위에서만 검색",
    "zoomScale": "확대 축척",
    "locatorUrl": "지오코더 URL",
    "locatorName": "지오코더 이름",
    "locatorExample": "예시",
    "locatorWarning": "이 지오코딩 서비스 버전은 지원되지 않습니다. 위젯은 지오코딩 서비스 10.0 이상을 지원합니다.",
    "locatorTips": "지오코딩 서비스에서 추천 기능을 지원하지 않기 때문에 추천을 사용할 수 없습니다.",
    "layerSource": "레이어 원본",
    "setLayerSource": "레이어 원본 설정",
    "setGeocoderURL": "지오코더 URL 설정",
    "searchLayerTips": "피처 서비스에서 페이지 매김 기능을 지원하지 않기 때문에 제안 사항을 사용할 수 없습니다.",
    "placeholder": "플레이스 홀더 텍스트",
    "searchFields": "검색 필드",
    "displayField": "디스플레이 필드",
    "exactMatch": "정확히 일치",
    "maxSuggestions": "최대 추천 수",
    "maxResults": "최대 결과",
    "enableLocalSearch": "로컬 검색 사용",
    "minScale": "최소 축척",
    "minScaleHint": "맵 축척이 이 축척보다 큰 경우 로컬 검색이 적용됨",
    "radius": "반경",
    "radiusHint": "위치와 가장 가까운 후보가 제일 먼저 반환되도록 지오코딩 후보의 순위를 올리는 데 사용되는 현재 맵 중심 주변 영역의 반경을 지정함",
    "setSearchFields": "검색 필드 설정",
    "set": "설정",
    "invalidUrlTip": "${URL} URL이 잘못되었거나 접근할 수 없습니다.",
    "invalidSearchSources": "잘못된 원본 설정 검색"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "필수 필드에 내용을 입력하세요.",
    "bufferDistanceFieldsErrorMsg": "유효한 값을 입력하세요.",
    "invalidSearchToleranceErrorMsg": "톨러런스 검색에 유효한 값을 입력하세요.",
    "atLeastOneCheckboxCheckedErrorMsg": "잘못된 구성",
    "noLayerAvailableErrorMsg": "레이어를 사용할 수 없음",
    "layerNotSupportedErrorMsg": "지원되지 않음 ",
    "noFieldSelected": "분석할 필드를 선택하려면 편집 작업을 사용하세요.",
    "duplicateFieldsLabels": "다음에 대해 중복 레이블 \"${labelText}\"이(가) 추가됨: \"${itemNames}\"",
    "noLayerSelected": "분석할 레이어를 하나 이상 선택하세요.",
    "errorInSelectingLayer": "레이어 선택 작업을 완료할 수 없습니다. 다시 시도하세요.",
    "errorInMaxFeatureCount": "분석할 유효한 최대 피처 수를 입력하세요."
  }
});