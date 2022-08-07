<template><div><p>魔法崩坏在游戏设计时，完全抛弃了线下游玩的可能性，所以玩家不需要准备任何的实体骰子或道具，当然如果想要使用道具做为辅助也是可以的。</p>
<p>玩家需要自行准备一只骰娘，即搭载了可以生成掷骰结果功能的QQ机器人或程序。魔法崩坏有其专用的骰娘，只要和星奈（作者）说明就可以借用（当然前提是星奈也需要一同进入群聊观看你们的游戏）。如果玩家只有通用的骰娘，也是没问题的，只是需要进行少量额外的计算来修正数值标准的不同。专用骰娘支持通用骰娘的所有基本指令，甚至多了四则运算等能力，相对应的，专用骰娘使用专用的指令来进行魔法崩坏规则的计算。</p>
<p>调用专用骰娘和通用骰娘的指令我会通过类似下面的形式标出。</p>
<CodeTabs :data='[{"title":"通用"},{"title":"专用"}]' tab-id="dice">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.rd6 //投掷一个六面骰子
.rd 3d6 //投掷三个六面骰子
.rd 3d6+6 //投掷三个六面骰子并将最后结果加6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.rd6 //投掷一个六面骰子
.rd 3d6 //投掷三个六面骰子
.rd 3d6+6 //投掷三个六面骰子并将最后结果加6
.rd6+d3*d2/(d3+2)-3 //用不到的程度，投掷好几个骰子然后放进去做四则运算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>为了方便通用骰娘计算，我会首先在代码中注明需要特殊计算的值，玩家可以在手动计算后将该值记录在角色卡中原数值的旁边，例如</p>
<CodeTabs :data='[{"title":"通用"},{"title":"专用"}]' tab-id="dice">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>emo*=100-emo //用100-原本的emo值作为emo*的值
.sc emo* //使用emo*的值调用通用骰娘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.msc emo //直接调用专用骰娘的指令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>通用的骰娘可能会根据作者的不同，在功能实现上有一些差别，具体的指令请参考你所使用的骰娘的说明书。专用骰娘的代码也会在github开源，有能力的玩家也可以自行搭建。</p>
<p>无论是手动计算还是使用骰娘计算，在遇到除法操作时，除非特殊说明，都是按照向下取整进行取值</p>
</div></template>
