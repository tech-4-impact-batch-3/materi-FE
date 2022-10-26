const MemberInfo = ({ name, age, info, imgUrl, nameColor }) => {
  return (
    <div className="profile-container">
      <img src={imgUrl} alt="" className="profile-img" />
      <div className="profile-info">
        <h2 style={{ color: nameColor }}>{name}</h2>
        <h3>{age} Tahun</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default MemberInfo;
