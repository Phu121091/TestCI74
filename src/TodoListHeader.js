const Header = ({lan}) => {
    let todos = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
        const tt = todos.filter((d)=>d.status!=="done").length;
        let note ="";
        {lan?note=`Bạn có ${tt}việc cần làm`:note=`You have ${tt} tasks lest!`}

    // const totals = total.filter((d)=>{d.status!=="done"}).lenght();
    return <div className="header">{note}</div>;
  };
  
  export default Header;
  