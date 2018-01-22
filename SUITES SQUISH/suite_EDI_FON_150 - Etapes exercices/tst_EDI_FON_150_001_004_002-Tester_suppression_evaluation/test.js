function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_2"), QEvent.MouseButtonPress, 41, 13, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_3"), QEvent.MouseButtonRelease, 41, 13, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":assessmentBox.assessmentComboBox_QComboBox"), 176, 21, 0, Qt.LeftButton);
    clickButton(waitForObject(":assessmentBox.assessmentAddButton_QPushButton"));
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 7, 10, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 7, 10, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 10, 13, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 10, 13, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":assessmentBox.assessmentComboBox_QComboBox"), 185, 23, 0, Qt.LeftButton);
    mouseClick(waitForObjectItem(":assessmentBox.assessmentComboBox_QComboBox", "1"), 138, 11, 0, Qt.LeftButton);
    clickButton(waitForObject(":assessmentBox.assessmentRemoveButton_QPushButton"));
    mouseClick(waitForObject(":assessmentBox.assessmentComboBox_QComboBox"), 261, 15, 0, Qt.LeftButton);
    sendEvent("QMouseEvent", waitForObject(":assessmentBox.assessmentComboBox_QComboBox"), QEvent.MouseButtonPress, 261, -16, Qt.LeftButton, 1, 0);
    test.vp("VP1");
}
