function ValueCard({ title }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="text-xl font-bold">
        {title}
      </h3>
    </div>
  );
}

export default ValueCard;