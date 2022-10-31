import PropTypes from "prop-types";

const StudentInfo = ({ name, age }) => {
  return (
    <>
      <h2>{name}</h2>
      <h2>{age + 5}</h2>
    </>
  );
};

StudentInfo.propTypes = {
  // type data string
  //   name: PropTypes.string,
  // type data number
  //   age: PropTypes.number,
  // type data bebas
  //   name: PropTypes.any.isRequired, //isRequired data harus ada
  // memberikan opsi untuk type data
  //   age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // type data array
  //   data: PropTypes.array,
  // mengecek value dari props
  //   data: PropTypes.arrayOf(PropTypes.number),
  // array dengan berbagai type data
  //   data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  // type data object
  //   info: PropTypes.object,
  // mengecek nilai dari object
  //   info: PropTypes.shape({
  //     hobby: PropTypes.string,
  //     class: PropTypes.number,
  //   }),
  // mengecek nilai dan key dari object
  info: PropTypes.exact({
    hobby: PropTypes.string,
    class: PropTypes.number,
  }).isRequired,
};

export default StudentInfo;
