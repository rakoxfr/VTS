function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":titleLabel_QLabel"), 95, 13, 0, Qt.LeftButton);
    clickButton(waitForObject(":ContentTabView.createNewStagePushButton_QPushButton"));
    test.vp("VP1");
}
