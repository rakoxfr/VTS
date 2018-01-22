function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":titleLabel_QLabel"), 61, 12, 0, Qt.LeftButton);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 656, 17, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Page");
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "<Keypad_2>");
    clickButton(waitForObject(":ContentTabView.previousSliderButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), 588, 8, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "Pah");
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "<Backspace>");
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "ge");
    type(waitForObject(":contentGroupBox.titleEdit_QLineEdit"), "<Keypad_1>");
    clickButton(waitForObject(":ContentTabView.deletePagePushButton_QPushButton"));
    clickButton(waitForObject(":ContentTabView.nextSliderButton_QPushButton"));
    test.vp("VP1");
}
