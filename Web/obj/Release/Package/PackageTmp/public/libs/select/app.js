var data = {
    professional: {
        "total": 16,
        "artworkRank": [
        {
            "id": 1,
            "text": "编剧",
            "name": "Screenwriter",
            "label": "编剧  Screenwriter",
            "description": "以文字及影视剧本格式，编写故事线、梗概、大纲、情节和对白。"
        },
        {
            "id": 2,
            "text": "美术设计",
            "name": "Art Design",
            "label": "美术设计Art Design",
            "description": "绘画概念设计、造型设计、色彩图稿及宣传资料等设计。"
        },
        {
            "id": 3,
            "text": "故事板",
            "name": "Storyboard",
            "label": "故事板  Storyboard",
            "description": "按人物和场景概念设计和剧情描述，想象绘画分镜头图并标注示意。"
        },
        {
            "id": 4,
            "text": "动态预演",
            "name": "PreViz",
            "label": "动态预演 PreViz",
            "description": "采用分镜动态故事板和简单示意模型预演效果，描绘剧情、角色、构图和氛围。"
        },
        {
            "id": 5,
            "text": "剪辑",
            "name": "Editing",
            "label": "剪辑 Editing",
            "description": "对镜头素材进行裁剪或重组，加强影片节奏，叙述剧情。"
        },
        {
            "id": 6,
            "text": "音效音乐",
            "name": "Sound&Music",
            "label": "音效音乐  Sound&Music",
            "description": "录制、收集、制作声音和对白素材，对应镜头画面制作声音和音乐。"
        },
        {
            "id": 7,
            "text": "模型",
            "name": "Modeling",
            "label": "模型  Modeling",
            "description": "按参考或设计图，制作角色、场景、道具大型和精细模型。"
        },
        {
            "id": 8,
            "text": "材质",
            "name": "Texturing",
            "label": "材质  Texturing",
            "description": "按参考或设计图，制作质感、色彩、纹理、透明、反射、发光等。"
        },
        {
            "id": 9,
            "text": "设置",
            "name": "Rigging",
            "label": "设置  Rigging",
            "description": "角色的骨架、蒙皮、权重，以及道具和场景等个体的整套驱动装置。"
        },
        {
            "id": 10,
            "text": "仿真",
            "name": "Simulation",
            "label": "仿真  Simulation",
            "description": "制作布料和毛发等仿真造型、质感、动态效果。"
        },
        {
            "id": 11,
            "text": "镜头布局",
            "name": "Layout",
            "label": "镜头布局  Layout",
            //"description": "制作正式镜头角度、运动，空间透视、沟通，角色走位及关键动作。"
            "description": "优化摄像机镜头动画和内容构图，制作角色走位及关键姿态动画。"

        },
        {
            "id": 12,
            "text": "动画",
            "name": "Animation",
            "label": "动画  Animation",
            "description": "制作角色肢体和表情动画，表演角色性格，以及场景和道具的动态。"
        },
        {
            "id": 13,
            "text": "特效",
            "name": "Effect",
            "label": "特效  Effect",
            "description": "制作水、雨、火、云、雾、雪、灰、爆炸、光电等特别视觉效果。"
        },
        {
            "id": 14,
            "text": "灯光",
            "name": "Lighting",
            "label": "灯光  Lighting",
            "description": "制作主灯光和镜头灯光，表现明暗、光影、冷暖、画面层次和重点。"
        },
        {
            "id": 15,
            "text": "渲染",
            "name": "Rendering",
            "label": "渲染  Rendering",
            "description": "根据效果调节规划，对镜头元素分层处理，运用不同渲染器获得分层素材。"
        },
        {
            "id": 16,
            "text": "合成",
            "name": "Compositing",
            "label": "合成  Compositing",
            "description": "对灯光和特效渲染分层素材合成画面，并突出强化效果。"
        }
        ,
        {
            "id": 17,
            "text": "制片管理",
            "name": "Production Management",
            "label": "制片管理  Production Management",
            "description": "按进度，预算，品质良好平衡管理项目运作，日常信息沟通协调到位，善于采集并分析数据。"
        }
        ,
        {
            "id": 18,
            "text": "技术指导",
            "name": "TD",
            "label": "技术指导  TD",
            "description": "在工具、生产流程和技术研发方面为项目提供技术支持。"
        }
        ]
    },
    ranks: [
    {
        level: '专家级',
        label: '专家级Expert',
        name: 'Expert',
        text: '（权威）',
        description: '1.作品成果(可为指导他人完成)技能含量达到环球数码<b>顶尖</b>水平，专业度在公司内<b>排名前10%</b>之内。<br/>\
                      2.答辩对专业认识有<b>独到见解</b>和<b>领先技能</b>，能够<b>深入浅出</b>让非专业人员理解。',
    }
    , {
        label: '高级Senior',
        level: '高级',
        name: 'Senior',
        text: '（领先）',
        description: '1.作品成果达到环球数码<b>最高难度水平</b>且具有<b>精彩亮点</b>，专业度<b>排名前30%</b>之内。<br/>\
                      2.相关文字说明能够体现出<b>独到见解</b>和<b>领先技能</b>。',
    }, {
        label: '副高Associate Senior',
        level: '副高',
        name: 'Associate Senior',
        text: '（精通）',
        description: '1.作品成果<b>接近</b>环球数码<b>最高难度</b>水平且具有亮点，专业度<b>排名前40%</b>之内。<br/>\
                      2.相关文字说明能够体现出<b>对整体主次规划布局</b>，以<b>超过一般人的专业手法</b>完成。',
    },
    {
        label: '中级Middle',
        level: '中级',
        name: 'Middle',
        text: '（熟练）',
        description: '1.作品成果达到环球数码<b>中等难度水平</b>，专业度在公司内<b>排名前80%</b>之内。<br/>\
                      2.相关文字说明能够体现出<b>对重点把握精准，清楚关联环节的要求</b>，以<b>步骤清晰规范的技能方法</b>完成。',
    },
    {
        level: '初级',
        label: '初级Junior',
        name: 'Junior',
        text: '(合格)',
        description: '1.作品成果达到环球数码<b>中低难度</b>水平。</br/>\
                      2.相关文字说明能够体现出<b>基本的专业意识</b>，专业术语正确，以<b>规范的技能方法</b>完成。',
    }
    ]
    ,
    EvaluationCriterion:
    [  //评定标准
    {
        name: "编剧",    // 环节
        junior: '描述清晰，规范', //初级
        middle: '主次分明，想象丰富', // 中级
        associatesenior: '情节精彩，起伏跌宕。', //副高
        senior: '构思巧妙，伏笔悬念，紧凑连贯。', //高级
        expert: '故事线构架，全片布局驾驭。' //专家
    },
    {
        name: "美术设计",
        junior: '造型合理准确。',
        middle: '想象丰富，绘画技法娴熟。',
        associatesenior: '造型突出，特征明显。',
        senior: '设计吸引眼球，过目不忘。',
        expert: '整套设计风格鲜明，艺术感强。'
    },
	{
	    name: "故事板",
	    junior: '镜头内容充分。',
	    middle: '想象丰富，镜头语言手法合理。',
	    associatesenior: '构图重点突出，视觉效果强。',
	    senior: '引人入胜，绘画有张力，紧凑连贯。',
	    expert: '驾驭全片剧情，绘画艺术感强。'
	},
    {
        name: "动态预演",
        junior: '镜头内容充分。',
        middle: '想象丰富，镜头语言手法合理。',
        associatesenior: '构图重点突出，视觉效果强。',
        senior: '引人入胜，内容有张力，紧凑连贯。',
        expert: '驾驭全片剧情，显示艺术感强。'
    },
	{
	    name: "剪辑",
	    junior: '按要求剪辑。',
	    middle: '独立剪辑，手法到位。',
	    associatesenior: '重点突出，节奏感强。',
	    senior: '搭配巧妙，冲击力强。',
	    expert: '全片布局驾驭，手法多样。'
	},
	{
	    name: "音效音乐",
	    junior: '按要求录制配音。',
	    middle: '能修改加工素材。',
	    associatesenior: '跟画面搭配精准。',
	    senior: '突出增强画面氛围。',
	    expert: '全片布局驾驭，手法多样。'
	},
	{
	    name: "模型",
	    junior: '造型合理准确。',
	    middle: '细节到位。',
	    associatesenior: '造型突出、布线精巧。',
	    senior: '整体和细节搭配，有特色。',
	    expert: '造型特色深刻，整体艺术感强。'
	},
	{
	    name: "材质",
	    junior: '色彩合理。',
	    middle: '细节到位，质感好。',
	    associatesenior: '色彩和质感好。',
	    senior: '整体和细节搭配，质感通透。',
	    expert: '特色印象深，整体艺术感强。'
	},
	{
	    name: "设置",
	    junior: '身体表情完整。',
	    middle: '履带、四足设置。',
	    associatesenior: '复杂生物设置； ',
	    senior: '自编工具插件辅助设置。 ',
	    expert: '设置文件功能强负荷低。'
	},
	{
	    name: "仿真",
	    junior: '简单布料毛发。',
	    middle: '多样化布料毛发。',
	    associatesenior: '独特造型的毛发布料及动态。 ',
	    senior: '毛发布料效果独特逼真精湛。 ',
	    expert: '毛发布料解算效果出彩印象深刻。'
	},
	{
	    name: "镜头布局",
	    junior: '镜头运动自然沟通透视合理。',
	    middle: '准确运用镜头语言手法。',
	    associatesenior: '镜头视觉效果好，运动节奏紧凑。 ',
	    senior: '独立把握分段情节。 ',
	    expert: '能够驾驭全片镜头和布局。'
	},
	{
	    name: "动画",
	    junior: '角色动画符合动画原理。',
	    middle: '镜头动画自然，表演体现角色性格。',
	    associatesenior: '角色性格特征明显。 ',
	    senior: '角色动作、情绪准确流畅精彩。 ',
	    expert: '表情和动作活灵活现传神，符合情节需要。'
	},
	{
	    name: "特效",
	    junior: '一类特效合格。',
	    middle: '两类特效到位。',
	    associatesenior: '三类特效逼真。',
	    senior: '效果精湛。',
	    expert: '效果震撼。'
	},
	{
	    name: "灯光",
	    junior: '符合光的原理。',
	    middle: '明暗冷暖对比。',
	    associatesenior: '结合模型材质，体现氛围质感。',
	    senior: '整体和细节搭配，层次清晰。',
	    expert: '艺术风格特色。'
	},
	{
	    name: "渲染",
	    junior: '分层合理。',
	    middle: '优化文件和分层方案。',
	    associatesenior: '对渲染参数熟悉，解决疑难问题。',
	    senior: '掌握业内常用渲染器，灵活运用。',
	    expert: '精通渲染软件和硬件系统。'
	},
	{
	    name: "合成",
	    junior: '画面通透。',
	    middle: '明暗冷暖对比。',
	    associatesenior: '层次清楚氛围强。',
	    senior: '画面焦点、风格突出。',
	    expert: '艺术风格特色。'
	},
    {
        name: "制片管理",
        junior: '准确理解进度表和专业术语，分类传达信息，独立跟进环节进度。',
        middle: '编制进度表，熟练采集、分析关键数据，独立监控环节进度，协调常见问题。',
        associatesenior: '中小项目预算评估，进度表把握主次规划布局。敏锐发现问题，对疑难点协调解决。',
        senior: '大型项目预算评估，协调各环节充分规划及监控。预警潜在问题，多种措施防范。',
        expert: '主导进度、预算、品质良好平衡，管控措施系统全面，高超的沟通洽谈技巧。'
    },
    {
        name: "技术指导",
        junior: '技术指导不设初级。',
        middle: '编写生产工具，解决项目某一环节问题。',
        associatesenior: '设计电视片项目生产流程，编写及维护项目复杂工具，解决生产日常问题。',
        senior: '设计电影项目生产流程，整合工具标准，高效解决复杂问题。',
        expert: '在高级基础上，在某个CG领域具有突破性技术研究成果，具有图形学、数学、物理方面综合研究能力。'
    }
    ]
};