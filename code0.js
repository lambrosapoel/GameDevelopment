gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDPlayerObjects3= [];
gdjs.MenuCode.GDBossObjects1= [];
gdjs.MenuCode.GDBossObjects2= [];
gdjs.MenuCode.GDBossObjects3= [];
gdjs.MenuCode.GDTiledGrassPlatformObjects1= [];
gdjs.MenuCode.GDTiledGrassPlatformObjects2= [];
gdjs.MenuCode.GDTiledGrassPlatformObjects3= [];
gdjs.MenuCode.GDGoLeftObjects1= [];
gdjs.MenuCode.GDGoLeftObjects2= [];
gdjs.MenuCode.GDGoLeftObjects3= [];
gdjs.MenuCode.GDGoRightObjects1= [];
gdjs.MenuCode.GDGoRightObjects2= [];
gdjs.MenuCode.GDGoRightObjects3= [];
gdjs.MenuCode.GDPlayerHitBoxObjects1= [];
gdjs.MenuCode.GDPlayerHitBoxObjects2= [];
gdjs.MenuCode.GDPlayerHitBoxObjects3= [];
gdjs.MenuCode.GDWitchObjects1= [];
gdjs.MenuCode.GDWitchObjects2= [];
gdjs.MenuCode.GDWitchObjects3= [];
gdjs.MenuCode.GDDialogueContainerObjects1= [];
gdjs.MenuCode.GDDialogueContainerObjects2= [];
gdjs.MenuCode.GDDialogueContainerObjects3= [];
gdjs.MenuCode.GDSignText2Objects1= [];
gdjs.MenuCode.GDSignText2Objects2= [];
gdjs.MenuCode.GDSignText2Objects3= [];
gdjs.MenuCode.GDSignTextObjects1= [];
gdjs.MenuCode.GDSignTextObjects2= [];
gdjs.MenuCode.GDSignTextObjects3= [];
gdjs.MenuCode.GDmedieval_95innObjects1= [];
gdjs.MenuCode.GDmedieval_95innObjects2= [];
gdjs.MenuCode.GDmedieval_95innObjects3= [];
gdjs.MenuCode.GDCheatsObjects1= [];
gdjs.MenuCode.GDCheatsObjects2= [];
gdjs.MenuCode.GDCheatsObjects3= [];
gdjs.MenuCode.GDControlsObjects1= [];
gdjs.MenuCode.GDControlsObjects2= [];
gdjs.MenuCode.GDControlsObjects3= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDQuitObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDBackObjects1= [];
gdjs.MenuCode.GDBackObjects2= [];
gdjs.MenuCode.GDBackObjects3= [];
gdjs.MenuCode.GDCheatObjects1= [];
gdjs.MenuCode.GDCheatObjects2= [];
gdjs.MenuCode.GDCheatObjects3= [];
gdjs.MenuCode.GDControlObjects1= [];
gdjs.MenuCode.GDControlObjects2= [];
gdjs.MenuCode.GDControlObjects3= [];
gdjs.MenuCode.GDBack2Objects1= [];
gdjs.MenuCode.GDBack2Objects2= [];
gdjs.MenuCode.GDBack2Objects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDControlsObjects2Objects = Hashtable.newFrom({"Controls": gdjs.MenuCode.GDControlsObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.MenuCode.GDBackObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatsObjects2Objects = Hashtable.newFrom({"Cheats": gdjs.MenuCode.GDCheatsObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBack2Objects2Objects = Hashtable.newFrom({"Back2": gdjs.MenuCode.GDBack2Objects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.MenuCode.GDQuitObjects2});gdjs.MenuCode.eventsList0x2a6673f4 = function(runtimeScene) {

{

gdjs.MenuCode.GDStartObjects2.createFrom(runtimeScene.getObjects("Start"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "HowToPlay"));
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.MenuCode.GDControlsObjects2.createFrom(runtimeScene.getObjects("Controls"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDControlsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "HowToPlay");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Cheats");
}}

}


{

gdjs.MenuCode.GDBackObjects2.createFrom(runtimeScene.getObjects("Back"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBackObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "HowToPlay");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "HowToPlay");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Cheats");
}}

}


{

gdjs.MenuCode.GDCheatsObjects2.createFrom(runtimeScene.getObjects("Cheats"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "HowToPlay");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Cheats");
}}

}


{

gdjs.MenuCode.GDBack2Objects2.createFrom(runtimeScene.getObjects("Back2"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBack2Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Cheats");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Cheats");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "HowToPlay");
}}

}


{

gdjs.MenuCode.GDQuitObjects2.createFrom(runtimeScene.getObjects("Quit"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "HowToPlay"));
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
}

}


}; //End of gdjs.MenuCode.eventsList0x2a6673f4
gdjs.MenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Background");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "HowToPlay");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Cheats");
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x2a6673f4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0x5b6e18


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDPlayerObjects3.length = 0;
gdjs.MenuCode.GDBossObjects1.length = 0;
gdjs.MenuCode.GDBossObjects2.length = 0;
gdjs.MenuCode.GDBossObjects3.length = 0;
gdjs.MenuCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.MenuCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.MenuCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.MenuCode.GDGoLeftObjects1.length = 0;
gdjs.MenuCode.GDGoLeftObjects2.length = 0;
gdjs.MenuCode.GDGoLeftObjects3.length = 0;
gdjs.MenuCode.GDGoRightObjects1.length = 0;
gdjs.MenuCode.GDGoRightObjects2.length = 0;
gdjs.MenuCode.GDGoRightObjects3.length = 0;
gdjs.MenuCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.MenuCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.MenuCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.MenuCode.GDWitchObjects1.length = 0;
gdjs.MenuCode.GDWitchObjects2.length = 0;
gdjs.MenuCode.GDWitchObjects3.length = 0;
gdjs.MenuCode.GDDialogueContainerObjects1.length = 0;
gdjs.MenuCode.GDDialogueContainerObjects2.length = 0;
gdjs.MenuCode.GDDialogueContainerObjects3.length = 0;
gdjs.MenuCode.GDSignText2Objects1.length = 0;
gdjs.MenuCode.GDSignText2Objects2.length = 0;
gdjs.MenuCode.GDSignText2Objects3.length = 0;
gdjs.MenuCode.GDSignTextObjects1.length = 0;
gdjs.MenuCode.GDSignTextObjects2.length = 0;
gdjs.MenuCode.GDSignTextObjects3.length = 0;
gdjs.MenuCode.GDmedieval_95innObjects1.length = 0;
gdjs.MenuCode.GDmedieval_95innObjects2.length = 0;
gdjs.MenuCode.GDmedieval_95innObjects3.length = 0;
gdjs.MenuCode.GDCheatsObjects1.length = 0;
gdjs.MenuCode.GDCheatsObjects2.length = 0;
gdjs.MenuCode.GDCheatsObjects3.length = 0;
gdjs.MenuCode.GDControlsObjects1.length = 0;
gdjs.MenuCode.GDControlsObjects2.length = 0;
gdjs.MenuCode.GDControlsObjects3.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDBackObjects1.length = 0;
gdjs.MenuCode.GDBackObjects2.length = 0;
gdjs.MenuCode.GDBackObjects3.length = 0;
gdjs.MenuCode.GDCheatObjects1.length = 0;
gdjs.MenuCode.GDCheatObjects2.length = 0;
gdjs.MenuCode.GDCheatObjects3.length = 0;
gdjs.MenuCode.GDControlObjects1.length = 0;
gdjs.MenuCode.GDControlObjects2.length = 0;
gdjs.MenuCode.GDControlObjects3.length = 0;
gdjs.MenuCode.GDBack2Objects1.length = 0;
gdjs.MenuCode.GDBack2Objects2.length = 0;
gdjs.MenuCode.GDBack2Objects3.length = 0;

gdjs.MenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
