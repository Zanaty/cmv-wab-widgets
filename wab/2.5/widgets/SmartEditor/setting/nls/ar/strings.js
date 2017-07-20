define({
  "layersPage": {
    "title": "تحديد قالب لإنشاء المعالم",
    "generalSettings": "إعدادات عامة",
    "layerSettings": "إعدادات الطبقة",
    "editDescription": "توفير عرض النص للوحة التحرير",
    "editDescriptionTip": "يتم عرض النص أعلى منتقى القالب، اتركه فارغًا لعدم وجود نص.",
    "promptOnSave": "يتم توجيهك لحفظ التحريرات غير المحفوظة عند غلق النموذج أو تحويله إلى السجل التالي.",
    "promptOnSaveTip": "يتم عرض رسالة توجيهية عندما ينقر المستخدم على إغلاق أو ينتقل إلى السجل التالي القابل للتحرير عندما يحتوي المعلم الحالي على تحريرات غير محفوظة.",
    "promptOnDelete": "يتطلب تأكيد عند حذف سجل.",
    "promptOnDeleteTip": "يتم عرض رسالة توجيهية عندما ينقر المستخدم على حذف لتأكيد الإجراء.",
    "removeOnSave": "إزالة المعالم من التحديد عند الحفظ.",
    "removeOnSaveTip": "هو خيار لإزالة المعلم من مجموعة التحديد عند حفظ السجل. وإذا كان عبارة عن السجل المحدد فقط، فإن اللوحة تعود إلى صفحة القالب.",
    "useFilterEditor": "استخدم عامل تصفية قالب المعلم",
    "useFilterEditorTip": "هو خيار لاستخدام منقى قالب التصفية الذي يوفر القدرة على عرض أحد قوالب الطبقة أو البحث عن القوالب باستخدام الاسم.",
    "listenToGroupFilter": "تطبيق قيم التصفية من عنصر واجهة استخدام \"عامل تصفية المجموعة\" على الحقول المُعدة مُسبقًا",
    "listenToGroupFilterTip": "عند تطبيق عامل التصفية في عنصر واجهة استخدام \"عامل تصفية المجموعة\"، قم بتطبيق القيمة على الحقل المطابق في قائمة القيمة المُعدة مُسبقًا.",
    "keepTemplateActive": "اجعل القالب المحدد نشطًا",
    "keepTemplateActiveTip": "عند إظهار منتقى القالب، وإذا تم تحديد القالب مُسبقًا، قم بإعادة تحديده مرة أخرى.",
    "geometryEditDefault": "تمكين تحرير الشكل الهندسي افتراضيًا",
    "autoSaveEdits": "يحفظ التحرير تلقائيًا (عندما يتم تحديد الإعداد المسبق)",
    "layerSettingsTable": {
      "allowDelete": "السماح بالحذف",
      "allowDeleteTip": "هو خيار للسماح للمستخدم بحذف معلم؛ ويتم تعطيله إذا كانت الطبقة لا تدعم الحذف.",
      "edit": "يمكن تحريره",
      "editTip": "هو خيار لتضمين الطبقة في عنصر واجهة المستخدم",
      "label": "الطبقة",
      "labelTip": "اسم الطبقة كما هو محدد في الخريطة",
      "update": "تعطيل تحرير الشكل الهندسي",
      "updateTip": "هو خيار لتعطيل القدرة على نقل الشكل الهندسي عند وضعه أو نقل الشكل الهندسية على معلم موجود",
      "allowUpdateOnly": "تحديث فقط",
      "allowUpdateOnlyTip": "هو خيار للسماح فقط بتعديل المعالم الحالية، والتحقق منها افتراضيًا وتعطيلها إذا كانت الطبقة لا تدعم عملية إنشاء معالم جديدة",
      "fields": "حقول",
      "fieldsTip": "تعديل الحقول ليتم تحريرها وتعريف البيانات الجدولية الذكية",
      "description": "الوصف",
      "descriptionTip": "خيار لإدخال نص لعرضه أعلى صفحة البيانات الجدولية."
    },
    "editFieldError": "لم تتوفر خاصية تعديلات الحقل والبيانات الجدولية الذكية للطبقات التي لا يمكن تحريرها",
    "noConfigedLayersError": "يتطلب المحرر الذكي طبقة واحدة أو مزيد من الطبقات القابلة للتحرير"
  },
  "editDescriptionPage": {
    "title": "نص النظرة العامة على تعريف البيانات الجدولية الخاص بـ <b>${layername}</b> "
  },
  "fieldsPage": {
    "title": "تكوين الحقول لـ <b>${layername}</b>",
    "description": "استخدم العمود الذي تم تعيينه مُسبقًا للسماح للمستخدم بإدخال قيمة قبل إنشاء معلم جديد. واستخدم زر تحرير الإجراءات لتفعيل البيانات الجدولية الذكية على الطبقة. ويمكن للبيانات الجدولية الذكية أن تتطلب إخفاء أو تعطيل حقل بناءً على القيم الموجودة في الحقول الأخرى.",
    "fieldsNotes": "* تعتبر حقل إلزامي. إذا قمت بإلغاء تحديد العرض لهذا الحقل وأن قالب التحرير لا يقوم بتعبئة قيمة الحقل، فلن تكون قادرًا على حفظ سجل جديد.",
    "fieldsSettingsTable": {
      "display": "العرض",
      "displayTip": "تحديد ما إذا يكون الحقل مرئي أم لا",
      "edit": "يمكن تحريره",
      "editTip": "التحقق مما إذا كان الحقل موجود في نموذج البيانات الجدولية أم لا",
      "fieldName": "الاسم",
      "fieldNameTip": "اسم الحقل المعرف في قاعدة البيانات",
      "fieldAlias": "الاسم المستعار",
      "fieldAliasTip": "اسم الحقل المعرف في الخريطة",
      "canPresetValue": "تعيين مسبق",
      "canPresetValueTip": "هو خيار لإظهار الحقل في قائمة الحقل التي تم تعيينها مُسبقًا والسماح للمستخدم بتعيين القيمة قبل عملية التحرير",
      "actions": "إجراءات",
      "actionsTip": "تغيير ترتيب الحقول أو إعداد البينات الجدولية الذكية"
    },
    "smartAttSupport": "لا تدعم البيانات الجدولية الذكية حقول قاعدة البيانات المطلوبة"
  },
  "actionPage": {
    "title": "تكوين إجراءات البيانات الجدولية الذكية لـ <b>${fieldname}</b>",
    "description": "دائمًا ما تكون الإجراءات غير مُفعلة مالم تحدد المعيار الذي يتم تشغيله عليها. تتم معالجة الإجراءات في ترتيب وسيتم تشغيل إجراء واحد فقط لكل حقل. ويمكنك استخدام زر تحرير المعيار لتحديد المعيار.",
    "actionsSettingsTable": {
      "rule": "إجراء",
      "ruleTip": "يتم تنفيذ الإجراء عند استيفاء المعيار",
      "expression": "تعبير",
      "expressionTip": "التعبير الناتج في تنسيق SQL من المعيار المحدد",
      "actions": "معيار",
      "actionsTip": "تغيير ترتيب القاعدة وتحديد المعيار عند تشغيله"
    },
    "actions": {
      "hide": "إخفاء",
      "required": "مطلوب",
      "disabled": "معطل"
    }
  },
  "filterPage": {
    "submitHidden": "هل تم إرسال البيانات الجدولية لهذا الحقل حتى عند الإخفاء؟",
    "title": "عبارة التكوين الخاصة بقاعدة ${action}",
    "filterBuilder": "قم بتعيين إجراء على الحقل عند مطابقة السجل ${any_or_all} للتعبيرات التالية",
    "noFilterTip": "عند استخدام الأدوات التالية، قم بتحديد العبارة الخاصة بالإجراء عندما تكون نشطة."
  }
});