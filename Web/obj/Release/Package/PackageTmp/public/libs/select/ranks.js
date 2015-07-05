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
"label": "美术设计  Art Design",
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
"text": "预演",
"name": "PreViz",
"label": "预演 PreViz",
"description": "以动态图或低精模型，设计粗略镜头构图、角色走位、灯光、特效效果，演示影片剧情内容，突出动感、节奏、氛围。"
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
"text": "布局",
"name": "Layout",
"label": "布局  Layout",
"description": "制作正式镜头角度、运动，空间透视、沟通，角色走位及关键动作。"
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
]
},
ranks: [
{
level: '专家级',
name: 'Expert',
text: '（权威）',
description: '作品成果(可为指导他人完成)技能含量达到环球数码<b>顶尖</b>水平，专业度在公司内<b>排名前10%</b>之内。<br/>\
答辩对专业认识有<b>独到见解</b>和<b>领先技能</b>，能够<b>深入浅出</b>让非专业人员理解。',
}
, {
level: '高级',
name: 'Senior',
text: '（领先）',
description: '作品成果达到环球数码<b>最高难度水平</b>且具有<b>精彩亮点</b>，专业度<b>排名前30%</b>之内。<br/>\
相关文字说明能够体现出<b>独到见解</b>和<b>领先技能</b>。',
}, {
level: '副高',
name: 'Associate Senior',
text: '（精通）',
description: '作品成果<b>接近</b>环球数码<b>最高难度</b>水平且具有亮点，专业度<b>排名前40%</b>之内。<br/>\
相关文字说明能够体现出<b>对整体主次规划布局</b>，以<b>超过一般人的专业手法</b>完成。',
},
{
level: '中级',
name: 'Middle',
text: '（熟练）',
description: '作品成果达到环球数码<b>中等难度水平</b>，专业度在公司内<b>排名前80%</b>之内。<br/>\
相关文字说明能够体现出<b>对重点把握精准，清楚关联环节的要求</b>，以<b>步骤清晰规范的技能方法</b>完成。',
},
{
level: '初级',
name: 'Junior',
text: '(合格)',
description: '作品成果达到环球数码<b>中低难度</b>水平。</br/>\
相关文字说明能够体现出<b>基本的专业意识</b>，专业术语正确，以<b>规范的技能方法</b>完成。',
}
]
};


var $selectize = $('#select-IsCross').selectize({
valueField: 'text',
labelField: 'label',
options: data.professional.artworkRank,
create: false,
render: {
option: function (item, escape) {
return '<a href="#" class="list-group-item">
          ' +
          '<h4 class="list-group-item-heading">' + escape(item.label) + '</h4>' +
          '<p class="list-group-item-text">
            <small>' + item.description + '</small>
          </p>' +
          '
        </a>';
        }
    }
});

$('#select-ApplyRank').selectize({
valueField: 'level',
labelField: 'level',
options: data.ranks,
create: false,
render: {
option: function (item, escape) {
return '<a href="#" class="list-group-item">
  ' +
  '<h4 class="list-group-item-heading">' + escape(item.level + item.name + item.text) + '</h4>' +
  '<p class="list-group-item-text">
    <small>' + item.description + '</small>
  </p>' +
  '
</a>';
}
}
});