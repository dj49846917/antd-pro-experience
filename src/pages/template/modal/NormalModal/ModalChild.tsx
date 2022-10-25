type Props = {
  visible: boolean;
};

function ModalChild(props: Props) {
  return <div>{props.visible}</div>;
}

export default ModalChild;
