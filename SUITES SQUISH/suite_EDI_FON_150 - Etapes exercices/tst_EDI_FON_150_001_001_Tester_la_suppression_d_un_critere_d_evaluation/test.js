function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel"), QEvent.MouseButtonPress, 42, 12, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_2"), QEvent.MouseButtonRelease, 42, 12, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 8, 12, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 8, 12, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonDblClick, 8, 12, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 8, 12, Qt.LeftButton, 0, 0);
    test.vp("VP8");
}
