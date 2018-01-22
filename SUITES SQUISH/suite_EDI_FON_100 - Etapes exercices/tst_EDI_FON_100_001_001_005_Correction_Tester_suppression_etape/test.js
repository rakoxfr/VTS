function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":imgLabel_QLabel"), 50, 3, 0, Qt.LeftButton);
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 544, 12, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Etape");
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "<Keypad_1>");
    clickButton(waitForObject(":ContentTabView.createNewStagePushButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 604, 16, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Etape");
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "<Keypad_2>");
    clickButton(waitForObject(":ContentTabView.createNewStagePushButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 603, 3, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Etape");
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "<Keypad_3>");
    clickButton(waitForObject(":ContentTabView.deletePagePushButton_QPushButton"));
    test.vp("VP1");
}
