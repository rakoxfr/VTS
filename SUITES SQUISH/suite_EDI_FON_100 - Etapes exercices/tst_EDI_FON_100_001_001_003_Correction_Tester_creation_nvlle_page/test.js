function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":imgLabel_QLabel"), 76, 3, 0, Qt.LeftButton);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    test.vp("VP1");
}
