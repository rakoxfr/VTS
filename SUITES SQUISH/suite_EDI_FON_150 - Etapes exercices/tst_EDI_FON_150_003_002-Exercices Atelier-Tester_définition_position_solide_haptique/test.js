function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":imgLabel_QLabel_7"), 93, 23, 0, Qt.LeftButton);
    scrollTo(waitForObject(":_translationGroup._translationXSlider_QSlider"), 1731);
    scrollTo(waitForObject(":_translationGroup._translationZSlider_QSlider"), 3000);
    scrollTo(waitForObject(":_translationGroup._translationYSlider_QSlider"), 1846);
    scrollTo(waitForObject(":_rotationGroup._rotationXSlider_QSlider"), -160);
    scrollTo(waitForObject(":_rotationGroup._rotationYSlider_QSlider"), -66);
    scrollTo(waitForObject(":_rotationGroup._rotationZSlider_QSlider"), -136);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_5"), QEvent.MouseButtonPress, 4, 50, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_6"), QEvent.MouseButtonRelease, 4, 50, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_8"), QEvent.MouseButtonPress, 125, 1, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_7"), QEvent.MouseButtonRelease, 125, 1, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":PositionTabView._okButton_QPushButton"));
    test.vp("VP1");
}
