gdjs.Tela5Code = {};


gdjs.Tela5Code.GDbtn_95ajudaObjects1= [];
gdjs.Tela5Code.GDbtn_95ajudaObjects2= [];
gdjs.Tela5Code.GDbtn_95voltarObjects1= [];
gdjs.Tela5Code.GDbtn_95voltarObjects2= [];
gdjs.Tela5Code.GDbtn_95avancarObjects1= [];
gdjs.Tela5Code.GDbtn_95avancarObjects2= [];
gdjs.Tela5Code.GDpersonagemObjects1= [];
gdjs.Tela5Code.GDpersonagemObjects2= [];
gdjs.Tela5Code.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela5Code.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela5Code.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela5Code.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela5Code.GDbgObjects1= [];
gdjs.Tela5Code.GDbgObjects2= [];
gdjs.Tela5Code.GDpersonagem_95escolaObjects1= [];
gdjs.Tela5Code.GDpersonagem_95escolaObjects2= [];
gdjs.Tela5Code.GDcursorObjects1= [];
gdjs.Tela5Code.GDcursorObjects2= [];
gdjs.Tela5Code.GDbg_95salaObjects1= [];
gdjs.Tela5Code.GDbg_95salaObjects2= [];
gdjs.Tela5Code.GDpersonagem_95maeObjects1= [];
gdjs.Tela5Code.GDpersonagem_95maeObjects2= [];
gdjs.Tela5Code.GDtxt_95mae_952Objects1= [];
gdjs.Tela5Code.GDtxt_95mae_952Objects2= [];
gdjs.Tela5Code.GDtxt_95mae1Objects1= [];
gdjs.Tela5Code.GDtxt_95mae1Objects2= [];
gdjs.Tela5Code.GDvalorObjects1= [];
gdjs.Tela5Code.GDvalorObjects2= [];
gdjs.Tela5Code.GDtxt_95mae3Objects1= [];
gdjs.Tela5Code.GDtxt_95mae3Objects2= [];

gdjs.Tela5Code.conditionTrue_0 = {val:false};
gdjs.Tela5Code.condition0IsTrue_0 = {val:false};
gdjs.Tela5Code.condition1IsTrue_0 = {val:false};
gdjs.Tela5Code.condition2IsTrue_0 = {val:false};

gdjs.Tela5Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela5Code.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela5Code.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela5Code.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela5Code.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela5Code.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela5Code.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela5Code.GDpersonagemObjects1.length = 0;
gdjs.Tela5Code.GDpersonagemObjects2.length = 0;
gdjs.Tela5Code.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela5Code.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela5Code.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela5Code.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela5Code.GDbgObjects1.length = 0;
gdjs.Tela5Code.GDbgObjects2.length = 0;
gdjs.Tela5Code.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela5Code.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela5Code.GDcursorObjects1.length = 0;
gdjs.Tela5Code.GDcursorObjects2.length = 0;
gdjs.Tela5Code.GDbg_95salaObjects1.length = 0;
gdjs.Tela5Code.GDbg_95salaObjects2.length = 0;
gdjs.Tela5Code.GDpersonagem_95maeObjects1.length = 0;
gdjs.Tela5Code.GDpersonagem_95maeObjects2.length = 0;
gdjs.Tela5Code.GDtxt_95mae_952Objects1.length = 0;
gdjs.Tela5Code.GDtxt_95mae_952Objects2.length = 0;
gdjs.Tela5Code.GDtxt_95mae1Objects1.length = 0;
gdjs.Tela5Code.GDtxt_95mae1Objects2.length = 0;
gdjs.Tela5Code.GDvalorObjects1.length = 0;
gdjs.Tela5Code.GDvalorObjects2.length = 0;
gdjs.Tela5Code.GDtxt_95mae3Objects1.length = 0;
gdjs.Tela5Code.GDtxt_95mae3Objects2.length = 0;


{

gdjs.Tela5Code.GDpersonagemObjects1.createFrom(runtimeScene.getObjects("personagem"));
gdjs.Tela5Code.GDpersonagem_95maeObjects1.createFrom(runtimeScene.getObjects("personagem_mae"));
gdjs.Tela5Code.GDvalorObjects1.createFrom(runtimeScene.getObjects("valor"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDpersonagemObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDpersonagemObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Tela5Code.GDpersonagem_95maeObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDpersonagem_95maeObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Tela5Code.GDvalorObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDvalorObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}
{ //Subevents

{

gdjs.Tela5Code.GDtxt_95mae1Objects2.createFrom(runtimeScene.getObjects("txt_mae1"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDtxt_95mae1Objects2.length ;i < len;++i) {
    gdjs.Tela5Code.GDtxt_95mae1Objects2[i].setString("Muito bem, Kamila!");
}
}}

}

} //End of subevents
}

}


{


gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela5Code.GDbtn_95ajudaObjects1.createFrom(runtimeScene.getObjects("btn_ajuda"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_ajuda", gdjs.Tela5Code.GDbtn_95ajudaObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDbtn_95ajudaObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDbtn_95ajudaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela5Code.GDbtn_95ajudaObjects1.createFrom(runtimeScene.getObjects("btn_ajuda"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_ajuda", gdjs.Tela5Code.GDbtn_95ajudaObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDbtn_95ajudaObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDbtn_95ajudaObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela5Code.GDbtn_95avancarObjects1.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela5Code.GDbtn_95avancarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDbtn_95avancarObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDbtn_95avancarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela5Code.GDbtn_95avancarObjects1.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela5Code.GDbtn_95avancarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDbtn_95avancarObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDbtn_95avancarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela5Code.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela5Code.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDbtn_95voltarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela5Code.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela5Code.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela5Code.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDbtn_95voltarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela5Code.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela5Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela5Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}


{


gdjs.Tela5Code.condition0IsTrue_0.val = false;
gdjs.Tela5Code.condition1IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Tela5Code.condition0IsTrue_0.val ) {
{
gdjs.Tela5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Tela5Code.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Tela5Code.GDbtn_95avancarObjects2.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela5Code.GDbtn_95avancarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela6", false);
}}

}


{

gdjs.Tela5Code.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela5Code.condition0IsTrue_0.val = false;
{
gdjs.Tela5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela5Code.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela4", false);
}}

}

} //End of subevents
}

}

return;
}
gdjs['Tela5Code']= gdjs.Tela5Code;
