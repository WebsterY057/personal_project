// Re-export from the shared data source
// Inline data to avoid path issues with require
const CONSTITUTIONS = [
  { id: 'pinghe', name: '平和质', emoji: '🌿', color: '#4CAF50', principle: '阴阳平衡，气血调和', description: '体形匀称健壮，面色润泽，精力充沛，睡眠良好，二便正常，舌淡红苔薄白，脉和缓有力。', character: '先天禀赋良好，后天调养得当。体形匀称健壮，面色润泽，头发稠密有光泽，目光有神，鼻色明润，唇色红润，不易疲劳，精力充沛，耐受寒热，睡眠良好，胃纳佳，二便正常，舌色淡红，苔薄白，脉和缓有力。', evidence: '《素问·生气通天论》："阴平阳秘，精神乃治。"平和质是阴阳平衡、气血调和的理想体质状态。', principleDetail: '饮食有节，劳逸结合，保持中庸。均衡营养，不偏食，不暴饮暴食。', seasonTip: '春季宜升补，夏季宜清补，秋季宜平补，冬季宜温补。顺应四季变化调整饮食作息。', healthAdvice: '1. 保持规律作息，早睡早起\n2. 均衡饮食，五谷为养，五果为助\n3. 适度运动，每周3-5次\n4. 心态平和，避免过激情绪', suitable: ['小米', '山药', '红枣', '枸杞', '银耳', '扁豆', '莲子', '黑芝麻', '桑葚', '蜂蜜', '核桃', '燕麦', '南瓜', '香菇', '鸡蛋', '牛奶', '鲫鱼', '鸡肉', '白菜', '萝卜'], avoid: [], recommendFoods: ['山药红枣粥', '银耳莲子羹', '枸杞菊花茶', '小米南瓜粥', '红枣桂圆茶', '山药排骨汤'], fitnessAdvice: '各运动类型均可，建议每周3-5次中等强度有氧运动（快走、游泳、骑行），配合瑜伽或太极拳保持身心平衡。运动强度以运动后微微出汗、心情舒畅为度。', exerciseCaution: '注意运动前后热身和拉伸，避免运动损伤。运动量循序渐进。' },
  { id: 'qixu', name: '气虚质', emoji: '💨', color: '#FF9800', principle: '补气养气，健脾为先', description: '元气不足，疲乏、气短、自汗等气虚表现。形体偏虚胖或消瘦，面色偏白，语音低怯，精神不振。', character: '气是维持人体生命活动的基本物质。气虚质的人元气不足，脏腑功能减退。形体偏虚胖或消瘦，面色㿠白，语音低怯，气短懒言，精神不振，易出汗，舌淡红，舌边有齿痕，脉弱。', evidence: '《素问·通评虚实论》："精气夺则虚。"《脾胃论》："脾胃之气既伤，而中气亦不能独行。"', principleDetail: '补气养气，以健脾益气为主。宜食益气健脾的食物，避免耗气伤气的食物。', seasonTip: '春季多食升发阳气之品（韭菜、香椿）；夏季避暑避湿，饮食清淡；秋季宜平补（山药、莲子）；冬季温补（黄芪、党参炖汤）。', healthAdvice: '1. 规律作息，避免熬夜耗气\n2. 适度运动，避免大汗耗气\n3. 饮食规律，细嚼慢咽\n4. 情绪平和，避免多思多虑', suitable: ['小米', '山药', '红枣', '牛肉', '鸡肉', '鲫鱼', '莲子', '扁豆', '南瓜', '香菇', '土豆', '鸡蛋', '牛奶', '燕麦', '党参', '白术', '黄芪', '太子参'], avoid: ['苦瓜', '绿豆', '西瓜', '香蕉', '螃蟹', '辣椒', '花椒', '薄荷', '萝卜子', '槟榔'], recommendFoods: ['山药红枣粥', '黄芪炖鸡汤', '小米南瓜粥', '莲子扁豆粥', '红枣桂圆茶', '党参炖排骨'], fitnessAdvice: '推荐低强度有氧运动如太极拳（调节呼吸与动作协调）、八段锦、散步。避免高强度间歇训练和长时间剧烈运动，以免耗气加重。运动时间控制在30-45分钟为宜，运动后及时补充温水。', exerciseCaution: '避免大汗淋漓的运动，运动后及时补充水分。感冒期间暂停运动。' },
  { id: 'yangxu', name: '阳虚质', emoji: '❄️', color: '#2196F3', principle: '温阳散寒，补肾壮阳', description: '阳气不足，畏寒怕冷、手足不温等虚寒表现。形体偏胖，肌肉松软不实，喜暖怕凉。', character: '阳气是人体温煦的动力源泉。阳虚质的人阳气不足，温煦功能减退。形体偏胖，肌肉松软，面色㿠白，怕冷，手足不温，喜热饮食，精神不振，睡眠偏多，舌淡胖嫩边有齿痕，苔润，脉沉迟。', evidence: '《素问·生气通天论》："阳气者，若天与日，失其所则折寿而不彰。"《景岳全书》："阳强则寿，阳衰则夭。"', principleDetail: '温阳散寒，以温补肾阳为主。宜食温热性食物，避免寒凉生冷。', seasonTip: '春夏养阳，利用春夏阳气生发之时调补阳气。冬季宜温补（当归生姜羊肉汤），夏季避免贪凉（空调、冷饮）。', healthAdvice: '1. 晨起晒背15分钟，补阳气\n2. 睡前热水泡脚，温经散寒\n3. 避风寒，注意保暖\n4. 多食温热，少食生冷', suitable: ['羊肉', '牛肉', '韭菜', '生姜', '核桃', '桂圆', '荔枝', '鸡肉', '红枣', '南瓜', '香菜', '鳝鱼', '海参', '板栗', '荔枝'], avoid: ['绿豆', '苦瓜', '西瓜', '梨', '香蕉', '螃蟹', '薏米', '冬瓜', '荸荠', '莲藕', '薄荷', '绿茶'], recommendFoods: ['当归生姜羊肉汤', '韭菜炒核桃', '红枣桂圆茶', '板栗炖鸡', '生姜红糖水', '核桃仁粥'], fitnessAdvice: '早晨适度运动助阳升发，推荐快走、慢跑、太极拳。避免冬泳、冷水浴等寒性运动。运动时间选择上午（阳气升发之时）。', exerciseCaution: '冬季运动注意保暖，避免清晨太冷时外出运动。运动后及时添衣。' },
  { id: 'yinxu', name: '阴虚质', emoji: '🔥', color: '#FF5252', principle: '滋阴降火，滋补肝肾', description: '阴液亏少，口燥咽干、手足心热等虚热表现。形体偏瘦，面色潮红，皮肤偏干。', character: '阴液是濡润人体的物质基础。阴虚质的人阴液不足，虚热内生。形体偏瘦，面色潮红，皮肤偏干，口干咽燥，手足心热，目干涩，眩晕耳鸣，睡眠差，大便干燥，舌红少津少苔，脉细数。', evidence: '《素问·逆调论》："阴气少而阳气胜，故热而烦满。"《丹溪心法》："阳常有余，阴常不足。"', principleDetail: '滋阴降火，滋补肝肾。宜食滋阴润燥的食物，避免温燥伤阴。', seasonTip: '秋冬养阴，秋冬季节宜多食滋阴之品（银耳、百合）。夏季避暑热伤阴，多补充水分。', healthAdvice: '1. 避免熬夜，保证充足睡眠养阴\n2. 节制房事，避免耗伤肾阴\n3. 避免过度运动大汗伤阴\n4. 多饮水，保持室内湿润', suitable: ['银耳', '百合', '枸杞', '桑葚', '黑芝麻', '鸭肉', '梨', '荸荠', '莲藕', '绿豆', '莲子', '蜂蜜', '黑木耳', '山药', '牛奶', '豆浆', '甲鱼'], avoid: ['辣椒', '花椒', '生姜', '韭菜', '羊肉', '荔枝', '桂圆', '白酒', '咖啡', '浓茶', '油炸食品'], recommendFoods: ['银耳莲子羹', '百合雪梨汤', '枸杞菊花茶', '黑芝麻糊', '山药枸杞粥', '莲子百合粥'], fitnessAdvice: '推荐中低强度运动如游泳（全身性运动且不伤关节）、瑜伽（拉伸放松）、太极拳。避免高温高湿环境下运动，运动后及时补充水分。', exerciseCaution: '避免桑拿、汗蒸等大汗伤阴的活动。夏季运动避开正午高温时段。' },
  { id: 'tanshi', name: '痰湿质', emoji: '💧', color: '#9C27B0', principle: '健脾祛湿，化痰降浊', description: '痰湿凝聚，形体肥胖、腹部肥满、口黏苔腻等表现。以体形肥胖、腹部肥满松软为主要特征。', character: '痰湿是水液代谢失常的病理产物。痰湿质的人水湿内停，痰浊凝聚。形体肥胖，腹部肥满松软，面部油脂较多，多汗且黏，胸闷痰多，口黏腻或甜，喜食肥甘甜黏，苔腻，脉滑。', evidence: '《素问·奇病论》："肥者令人内热，甘者令人中满。"《丹溪心法》："肥人多痰湿。"', principleDetail: '健脾祛湿，化痰降浊。宜食清淡利湿的食物，避免肥甘厚味。', seasonTip: '长夏（夏秋之交）湿气最重，宜加强祛湿（薏米赤小豆汤）。夏季避暑湿，冬季少进补以免助湿。', healthAdvice: '1. 控制饮食总量，七分饱\n2. 少食甜腻、油炸、高脂食物\n3. 增加运动量，促进代谢\n4. 居室保持干燥通风', suitable: ['薏米', '赤小豆', '冬瓜', '白萝卜', '山楂', '海带', '荷叶', '茯苓', '陈皮', '生姜', '燕麦', '荞麦', '黄瓜', '苦瓜', '山药'], avoid: ['桂圆', '荔枝', '红枣', '榴莲', '芒果', '糖果', '奶油', '肥肉', '糯米', '年糕'], recommendFoods: ['薏米赤小豆汤', '山楂陈皮茶', '荷叶冬瓜汤', '白萝卜炖排骨', '茯苓粥', '海带冬瓜汤'], fitnessAdvice: '有氧运动是首选，如慢跑（促进代谢）、游泳（全身运动）、快走。需要较大运动量以消耗多余能量，建议每周5次以上，每次40分钟以上。', exerciseCaution: '运动后及时擦干汗水，避免受风受凉。关节负担较大时选择游泳或骑行。' },
  { id: 'shire', name: '湿热质', emoji: '☀️', color: '#FF5722', principle: '清热利湿，分消走泄', description: '湿热内蕴，面垢油光、口苦苔黄腻等表现。以面垢油光、易生痤疮、口苦口干为主要特征。', character: '湿热是湿与热相互搏结的病理状态。湿热质的人湿热内蕴，熏蒸于上则面垢油光、易生痤疮，下注则小便短黄、大便黏滞。形体中等或偏胖，舌质偏红，苔黄腻，脉滑数。', evidence: '《温病条辨》："湿与温合，蒸郁而蒙蔽于上，清窍为之壅塞。"《医原》："湿郁则生热。"', principleDetail: '清热利湿，分消走泄。宜食清凉利湿的食物，避免辛辣温热。', seasonTip: '夏季湿热最重，宜多食清利湿热之品（绿豆、冬瓜）。长夏注意化湿，秋季防燥热。', healthAdvice: '1. 保持皮肤清洁干燥\n2. 避免辛辣刺激性食物\n3. 戒烟限酒\n4. 保持大便通畅', suitable: ['绿豆', '苦瓜', '薏米', '赤小豆', '冬瓜', '黄瓜', '荞麦', '梨', '百合', '荷叶', '芹菜', '莲藕', '西瓜', '茯苓', '莲子'], avoid: ['辣椒', '花椒', '生姜', '韭菜', '羊肉', '桂圆', '荔枝', '榴莲', '白酒', '油炸食品', '海鲜发物'], recommendFoods: ['绿豆薏米汤', '苦瓜炒蛋', '冬瓜荷叶汤', '赤小豆汤', '百合雪梨汤', '荞麦面'], fitnessAdvice: '中高强度运动帮助湿热排出，如慢跑（促进排汗）、游泳（全身运动）、球类运动。运动出汗有助于湿热排出，运动后注意补充水分。', exerciseCaution: '避免运动后立即冲冷水澡或进入空调房，以免湿热郁闭。运动后适量饮用温水或淡盐水。' },
  { id: 'xueyu', name: '血瘀质', emoji: '🩸', color: '#E91E63', principle: '活血化瘀，行气通络', description: '血行不畅，肤色晦暗、舌质紫暗等表现。以肤色晦暗、舌质紫暗、瘀点瘀斑为主要特征。', character: '瘀血是血液运行不畅或停滞的病理状态。血瘀质的人血液循环不畅。肤色晦暗，色素沉着，容易出现瘀斑，口唇暗淡或紫，舌暗或有瘀点，舌下络脉紫暗或增粗，脉涩。', evidence: '《素问·调经论》："血气不和，百病乃变化而生。"《医林改错》："血瘀则气滞，气滞则血瘀。"', principleDetail: '活血化瘀，行气通络。宜食活血化瘀的食物，避免寒凉凝滞。', seasonTip: '春季宜疏肝活血（玫瑰花茶），冬季注意保暖防寒凝，夏季少吃冰凉食物。', healthAdvice: '1. 适度运动促进血液循环\n2. 保持情绪舒畅，避免郁结\n3. 注意保暖，避免寒凝血瘀\n4. 定期按摩疏通经络', suitable: ['山楂', '黑木耳', '红糖', '红花', '丹参', '桃仁', '玫瑰花', '洋葱', '大蒜', '生姜', '茄子', '藕', '螃蟹', '醋', '红酒'], avoid: ['肥肉', '奶油', '冰淇淋', '冷饮', '苦瓜', '绿茶', '西瓜', '柿子', '冰镇食物'], recommendFoods: ['山楂红糖水', '黑木耳炒蛋', '玫瑰花茶', '丹参炖乌鸡', '桃仁粥', '红糖姜茶'], fitnessAdvice: '推荐促进血液循环的运动，如快走（促进下肢血液循环）、舞蹈（全身协调）、太极拳、健身操。适度拉伸有助于经络疏通。运动强度以身体发热为度。', exerciseCaution: '避免久坐不动，每45分钟起身活动。运动时注意保护关节，避免外伤。' },
  { id: 'qiyu', name: '气郁质', emoji: '🌊', color: '#3F51B5', principle: '疏肝理气，调畅情志', description: '气机郁滞，神情抑郁、忧虑脆弱等表现。以性格内向、情绪不稳定、敏感多虑为主要特征。', character: '气郁是指气机运行不畅的病理状态。气郁质的人长期情志不畅，气机郁滞。性格内向，情绪不稳定，敏感多虑，忧郁脆弱，经常叹气，胸胁胀满或走窜疼痛，咽部有异物感（梅核气），舌淡红苔薄白，脉弦。', evidence: '《素问·举痛论》："百病生于气也。"《丹溪心法》："气血冲和，万病不生，一有怫郁，诸病生焉。"', principleDetail: '疏肝理气，调畅情志。宜食行气解郁的食物，避免收涩滞气。', seasonTip: '春季肝气升发，宜多户外活动（踏青、赏花），少食收涩之品。秋季防悲秋，保持心情舒畅。', healthAdvice: '1. 多参与社交活动，倾诉交流\n2. 培养兴趣爱好，转移注意力\n3. 音乐疗法，听舒缓音乐\n4. 练习深呼吸，调畅气机', suitable: ['玫瑰花', '佛手', '小麦', '百合', '山楂', '萝卜', '洋葱', '大蒜', '陈皮', '橙子', '柚子', '茴香', '香菜', '茉莉花'], avoid: ['咖啡', '浓茶', '酒精', '槟榔', '人参', '黄芪', '桂圆', '羊肉', '糯米'], recommendFoods: ['玫瑰花茶', '佛手炖瘦肉', '百合小米粥', '山楂陈皮茶', '小麦甘草汤', '茉莉花茶'], fitnessAdvice: '选择趣味性强的运动以调畅情志，如舞蹈（愉悦身心）、团体球类（社交互动）、瑜伽（身心合一）、户外登山。运动时配合深呼吸效果更佳。', exerciseCaution: '避免单人孤独运动。运动环境宜优美轻松，配合音乐更佳。运动前后保持心情愉快。' },
  { id: 'tebing', name: '特禀质', emoji: '🧬', color: '#00BCD4', principle: '益气固表，调节免疫', description: '先天失常，过敏体质或生理缺陷。以生理缺陷、过敏反应为主要特征。包括过敏体质、遗传性疾病等。', character: '特禀质是指由于先天禀赋不足或遗传因素造成的特殊体质。包括过敏体质（易发荨麻疹、湿疹、过敏性鼻炎、哮喘等）、遗传性疾病等。形体无明显特征，或有先天畸形、生理缺陷。', evidence: '《灵枢·寿夭刚柔》："人之生也，有刚有柔，有弱有强。"《诸病源候论》："小儿有禀性过敏者。"', principleDetail: '益气固表，调节免疫。宜食扶正固本的食物，避免过敏原。', seasonTip: '春秋季过敏高发，注意防护（戴口罩），避免接触花粉、尘螨。夏季少食海鲜等发物。', healthAdvice: '1. 记录过敏原，制作过敏日记\n2. 换季时提前服用抗过敏食物\n3. 居室常清洁，减少尘螨\n4. 增强体质，提高免疫力', suitable: ['蜂蜜', '大枣', '山药', '党参', '黄芪', '白术', '防风', '太子参', '糯米', '鸡肉', '土豆', '银耳', '枸杞', '莲子', '百合'], avoid: ['螃蟹', '虾', '芒果', '菠萝', '花生', '酒精', '海鲜', '辛辣刺激性食物', '人工添加剂', '过敏原食物'], recommendFoods: ['蜂蜜柠檬水', '山药大枣粥', '黄芪炖鸡汤', '银耳莲子羹', '糯米红枣粥', '太子参炖肉'], fitnessAdvice: '以室内运动为主，如瑜伽（增强呼吸功能）、太极拳（调节免疫）、室内游泳（增强心肺功能）。避免在花粉季或空气污染严重时户外运动。', exerciseCaution: '运动前后注意保暖防寒，避免冷空气刺激呼吸道。随身携带应急药物。' }
]

const CONSTITUTION_QUESTIONS = [
  { id: 1, text: '您日常的精力状态如何？', options: [
    { text: '精力充沛，工作学习效率高', scores: { pinghe: 2, qixu: -1, yangxu: -1 } },
    { text: '偶尔感觉疲劳，休息后能恢复', scores: { qixu: 1 } },
    { text: '经常疲倦乏力，稍微活动就累', scores: { qixu: 2, yangxu: 1 } },
    { text: '严重乏力，什么都不想做，说话都嫌累', scores: { qixu: 3, yangxu: 2, qiyu: 1 } }
  ]},
  { id: 2, text: '您对冷热的耐受情况如何？', options: [
    { text: '手脚温暖，耐寒耐热，感觉正常', scores: { pinghe: 1, yangxu: -1, yinxu: -1 } },
    { text: '比较怕冷，秋冬手脚冰凉，喜欢暖和的天气', scores: { yangxu: 2, qixu: 1 } },
    { text: '手脚心发热，怕热喜凉，冬天盖被子也觉得燥热', scores: { yinxu: 2, shire: 1 } },
    { text: '既怕冷又怕热，换季特别不舒服', scores: { qixu: 1, qiyu: 1 } }
  ]},
  { id: 3, text: '您的体型和体重变化情况？', options: [
    { text: '体型匀称，体重稳定', scores: { pinghe: 2, tanshi: -1 } },
    { text: '偏瘦，怎么吃都不胖', scores: { yinxu: 1, qixu: 1 } },
    { text: '偏胖，腹部松软，容易长胖', scores: { tanshi: 2, qixu: 1 } },
    { text: '体型不匀称，局部肥胖明显', scores: { tanshi: 2, shire: 1 } }
  ]},
  { id: 4, text: '您的皮肤状态如何？', options: [
    { text: '皮肤光滑滋润，颜色正常', scores: { pinghe: 2, yinxu: -1, shire: -1 } },
    { text: '皮肤偏干，容易脱皮起皱', scores: { yinxu: 2, xueyu: 1 } },
    { text: '皮肤出油多，容易长痘痘或湿疹', scores: { shire: 2, tanshi: 1 } },
    { text: '皮肤暗沉，有色斑或瘀斑', scores: { xueyu: 2, qiyu: 1 } }
  ]},
  { id: 5, text: '您的情绪和心理状态？', options: [
    { text: '情绪稳定，心态平和', scores: { pinghe: 2, qiyu: -2 } },
    { text: '偶尔心情低落，但能自我调节', scores: { qiyu: 1 } },
    { text: '经常郁闷焦虑，爱叹气，想法多', scores: { qiyu: 2, xueyu: 1 } },
    { text: '容易急躁发怒，控制不住脾气', scores: { shire: 2, qiyu: 1 } }
  ]},
  { id: 6, text: '您的消化和排便情况？', options: [
    { text: '消化好，大便规律成形', scores: { pinghe: 2, tanshi: -1, qixu: -1 } },
    { text: '食欲不振，饭后腹胀，大便偏稀', scores: { qixu: 2, tanshi: 1, yangxu: 1 } },
    { text: '大便黏腻不爽，冲不干净，味重', scores: { shire: 2, tanshi: 2, qixu: 1 } },
    { text: '大便干结，像羊粪一样一粒一粒', scores: { yinxu: 2, xueyu: 1 } }
  ]},
  { id: 7, text: '您是否容易感冒或生病？病后恢复如何？', options: [
    { text: '很少生病，一年不超过2次', scores: { pinghe: 2, qixu: -2, tebing: -1 } },
    { text: '换季时容易感冒，一般一周恢复', scores: { qixu: 1, tebing: 1 } },
    { text: '经常感冒，恢复慢，容易反复', scores: { qixu: 2, yangxu: 1 } },
    { text: '容易过敏（打喷嚏、流鼻涕、起疹子），但不是感冒', scores: { tebing: 2, qixu: 1 } }
  ]},
  { id: 8, text: '您的面色和舌象表现？', options: [
    { text: '面色红润有光泽，舌色淡红', scores: { pinghe: 2, xueyu: -1, qixu: -1 } },
    { text: '面色苍白或萎黄，容易没有血色', scores: { qixu: 2, xueyu: 1, yangxu: 1 } },
    { text: '面色晦暗，唇色偏暗或紫，舌下青筋明显', scores: { xueyu: 2, qiyu: 1 } },
    { text: '面色潮红，两颧发红，像涂了胭脂', scores: { yinxu: 2, shire: 1 } }
  ]},
  { id: 9, text: '您是否有过敏史或特殊体质反应？', options: [
    { text: '没有特殊过敏，什么都可以吃', scores: { pinghe: 2, tebing: -2 } },
    { text: '季节变化时容易打喷嚏、流鼻涕', scores: { tebing: 1, qixu: 1 } },
    { text: '有明显过敏（药物/食物/花粉），皮肤容易起疹子', scores: { tebing: 2 } },
    { text: '过敏反应严重（哮喘、喉头水肿等）', scores: { tebing: 3, qixu: 1 } }
  ]},
  { id: 10, text: '您是否感觉身体沉重或有痰？', options: [
    { text: '没有，身体轻快', scores: { pinghe: 1, tanshi: -1 } },
    { text: '早晨起来痰多，或喉咙不清爽', scores: { tanshi: 1, shire: 1 } },
    { text: '头重身困，像裹了湿布，总想睡觉', scores: { tanshi: 2, qixu: 1 } },
    { text: '胸闷痰多，感觉喘不上气', scores: { tanshi: 2, qiyu: 1, xueyu: 1 } }
  ]},
  { id: 11, text: '您的睡眠质量如何？', options: [
    { text: '睡眠好，入睡快，一觉到天亮', scores: { pinghe: 2, yinxu: -1, qiyu: -1 } },
    { text: '容易醒，夜尿多，睡不够', scores: { yangxu: 2, qixu: 1 } },
    { text: '入睡困难，翻来覆去睡不着', scores: { qiyu: 2, yinxu: 1, xueyu: 1 } },
    { text: '多梦，容易惊醒，醒后口干咽燥', scores: { yinxu: 2, shire: 1, qiyu: 1 } }
  ]},
  { id: 12, text: '您的腰膝状态如何？', options: [
    { text: '腰膝有力，活动自如', scores: { pinghe: 1, yangxu: -1, yinxu: -1 } },
    { text: '腰膝酸软，劳累后加重', scores: { yangxu: 1, yinxu: 1 } },
    { text: '经常腰膝冷痛，像有风吹', scores: { yangxu: 2 } },
    { text: '腰膝酸软伴有头晕耳鸣', scores: { yinxu: 2, qixu: 1 } }
  ]},
  { id: 13, text: '您口渴和喝水的情况？', options: [
    { text: '不渴不喝，口不干', scores: { pinghe: 1, yinxu: -1, shire: -1 } },
    { text: '口干想喝水，喝温水舒服', scores: { qixu: 1, yinxu: 1 } },
    { text: '经常口干，想喝冷饮冰水', scores: { yinxu: 2, shire: 1 } },
    { text: '口渴但不想喝水，或喝不多', scores: { tanshi: 1, qiyu: 1 } }
  ]},
  { id: 14, text: '您身体是否有固定的疼痛？', options: [
    { text: '没有疼痛或不适', scores: { pinghe: 1, xueyu: -1, qiyu: -1 } },
    { text: '偶尔胀痛，位置不固定，与情绪有关', scores: { qiyu: 1 } },
    { text: '有固定位置的刺痛，夜间加重', scores: { xueyu: 2, qiyu: 1 } },
    { text: '关节或肌肉酸痛沉重', scores: { tanshi: 1, xueyu: 1, shire: 1 } }
  ]},
  { id: 15, text: '您是否感觉头晕或耳鸣？', options: [
    { text: '没有头晕耳鸣', scores: { pinghe: 1, yinxu: -1, qixu: -1 } },
    { text: '劳累后容易头晕眼花', scores: { qixu: 1, xueyu: 1 } },
    { text: '经常头晕，头重脚轻', scores: { tanshi: 1, qixu: 1 } },
    { text: '经常耳鸣，声音细小持续', scores: { yinxu: 2, yangxu: 1 } }
  ]},
  { id: 16, text: '您的出汗情况如何？', options: [
    { text: '出汗正常，运动后适度出汗', scores: { pinghe: 1, qixu: -1, yinxu: -1 } },
    { text: '白天不动也容易出汗（自汗），怕风', scores: { qixu: 2, yangxu: 1 } },
    { text: '晚上睡觉出汗（盗汗），醒后汗止', scores: { yinxu: 2, shire: 1 } },
    { text: '很少出汗，皮肤干燥', scores: { xueyu: 1, yinxu: 1 } }
  ]},
  { id: 17, text: '您的季节适应性如何？', options: [
    { text: '四季都适应良好', scores: { pinghe: 2 } },
    { text: '夏季很难受，怕热多汗', scores: { shire: 2, yinxu: 1 } },
    { text: '冬季很难受，怕冷严重', scores: { yangxu: 2, qixu: 1 } },
    { text: '换季时容易不舒服（过敏、感冒等）', scores: { tebing: 2, qixu: 1 } }
  ]},
  { id: 18, text: '您的舌苔情况如何？（请对着镜子观察）', options: [
    { text: '舌苔薄白，舌体适中', scores: { pinghe: 2 } },
    { text: '舌苔白腻，舌体胖大有齿痕', scores: { tanshi: 2, qixu: 2 } },
    { text: '舌苔黄腻，舌质偏红', scores: { shire: 2, yinxu: 1 } },
    { text: '舌质暗紫，或有瘀点瘀斑', scores: { xueyu: 2, qiyu: 1 } }
  ]}
]

const FOOD_DATABASE = []  // Removed for miniprogram space - full data in H5
const RECIPES = {}
const FITNESS_WORKOUTS = []
const SOLAR_TERMS = []

function getConstitutionById(id) {
  return CONSTITUTIONS.find(c => c.id === id)
}

function calculateResult(scores) {
  const nonPinghe = Object.entries(scores).filter(([id]) => id !== 'pinghe').sort((a, b) => b[1] - a[1])
  if (nonPinghe.length > 0) {
    const topId = nonPinghe[0][0], topScore = nonPinghe[0][1], pingheScore = scores.pinghe || 0
    if (topScore >= 3 && (topScore - pingheScore) >= 2) return topId
    const secondScore = nonPinghe.length > 1 ? nonPinghe[1][1] : 0
    if (topScore >= 3 && (topScore - secondScore) >= 2) return topId
    if (pingheScore >= 3 && pingheScore >= topScore - 1) return 'pinghe'
    if (topScore > 0) return topId
  }
  return 'pinghe'
}

function getCurrentSolarTerm() {
  const now = new Date()
  const today = (now.getMonth() + 1) * 100 + now.getDate()
  for (let i = SOLAR_TERMS.length - 1; i >= 0; i--) {
    if (today >= SOLAR_TERMS[i].month * 100 + SOLAR_TERMS[i].day) return SOLAR_TERMS[i]
  }
  return SOLAR_TERMS[SOLAR_TERMS.length - 1]
}

const SYMPTOM_KEYWORDS = [
  { keywords: ['怕冷', '手脚冷', '四肢不温', '畏寒', '怕风', '喜暖'], negations: ['不', '没', '无'], scores: { yangxu: 2, qixu: 1 } },
  { keywords: ['疲倦', '乏力', '没劲', '气短', '气喘', '懒言', '自汗', '易出汗'], negations: ['不', '没', '无'], scores: { qixu: 2, yangxu: 1 } },
  { keywords: ['口干', '咽干', '舌燥', '口渴', '手脚心热', '五心烦热', '盗汗', '潮热'], negations: ['不', '没', '无'], scores: { yinxu: 2, shire: 1 } },
  { keywords: ['出油', '长痘', '痤疮', '粉刺', '口苦', '口臭', '苔黄', '黄痰', '小便黄'], negations: ['不', '没', '无'], scores: { shire: 2, tanshi: 1 } },
  { keywords: ['痰多', '痰', '胸闷', '腹胀', '肥胖', '肚子大', '大便稀', '大便不成形'], negations: ['不', '没', '无', '少'], scores: { tanshi: 2, qixu: 1 } },
  { keywords: ['叹气', '爱叹气', '多愁善感', '情绪低落', '抑郁', '胸胁胀'], negations: ['不', '没', '无'], scores: { qiyu: 2 } },
  { keywords: ['面色晦暗', '唇暗', '唇紫', '刺痛', '固定痛', '夜间痛', '痛经', '瘀斑'], negations: ['不', '没', '无'], scores: { xueyu: 2, qiyu: 1 } },
  { keywords: ['过敏', '喷嚏', '鼻塞', '流涕', '鼻痒', '咳嗽', '哮喘', '皮疹', '荨麻疹', '湿疹', '皮肤痒'], negations: ['不', '没', '无'], scores: { tebing: 2, qixu: 1 } }
]

module.exports = {
  CONSTITUTIONS, CONSTITUTION_QUESTIONS, FOOD_DATABASE, RECIPES,
  FITNESS_WORKOUTS, SOLAR_TERMS, SYMPTOM_KEYWORDS,
  getConstitutionById, calculateResult, getCurrentSolarTerm
}
