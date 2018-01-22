function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel"), QEvent.MouseButtonPress, 49, 4, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_2"), QEvent.MouseButtonRelease, 49, 4, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":assessmentBox.assessmentComboBox_QComboBox"), 238, 14, 0, Qt.LeftButton);
    clickButton(waitForObject(":assessmentBox.assessmentAddButton_QPushButton"));
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 13, 15, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 13, 15, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 14, 20, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 14, 20, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonPress, 10, 5, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":assessmentScrollArea.assessmentRemoveButton_QPushButton"), QEvent.MouseButtonRelease, 10, 6, Qt.LeftButton, 0, 0);
    mouseClick(waitForObject(":assessmentBox.assessmentComboBox_QComboBox"), 205, 15, 0, Qt.LeftButton);
    mouseClick(waitForObjectItem(":assessmentBox.assessmentComboBox_QComboBox", "1"), 176, 14, 0, Qt.LeftButton);
    mouseClick(waitForObject(":assessmentBox.assessmentComboBox_QComboBox"), 199, 13, 0, Qt.LeftButton);
    mouseClick(waitForObjectItem(":assessmentBox.assessmentComboBox_QComboBox", "2"), 182, 9, 0, Qt.LeftButton);
    test.vp("VP1");
}
