function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_4"), QEvent.MouseButtonPress, 31, 2, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_5"), QEvent.MouseButtonRelease, 31, 2, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_3"), QEvent.MouseButtonPress, 63, 0, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_4"), QEvent.MouseButtonRelease, 63, 0, Qt.LeftButton, 0, 0);
    sendEvent("QWheelEvent", waitForObject(":assessmentScrollArea_QWidget"), 548, 110, -120, 0, 2);
    sendEvent("QWheelEvent", waitForObject(":assessmentScrollArea_QWidget_2"), 538, 36, -120, 0, 2);
    sendEvent("QWheelEvent", waitForObject(":assessmentScrollArea_QWidget_2"), 538, 38, -120, 0, 2);
    sendEvent("QWheelEvent", waitForObject(":assessmentScrollArea_QWidget_2"), 538, 41, -120, 0, 2);
    mouseClick(waitForObject(":assessmentScrollArea.assessmentComboBox_QComboBox"), 463, 21, 0, Qt.LeftButton);
    mouseClick(waitForObject(":assessmentScrollArea.assessmentComboBox_QComboBox"), 591, 14, 0, Qt.LeftButton);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 14, 12, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 14, 12, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 17, 9, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 17, 9, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 12, 8, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 12, 8, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":assessmentScrollArea.assessmentComboBox_QComboBox"), 572, 22, 0, Qt.LeftButton);
    mouseClick(waitForObjectItem(":assessmentScrollArea.assessmentComboBox_QComboBox", "Surgery Time"), 526, 12, 0, Qt.LeftButton);
    clickButton(waitForObject(":assessmentScrollArea.assessmentAddButton_QPushButton"));
    test.vp("VP1");
}
