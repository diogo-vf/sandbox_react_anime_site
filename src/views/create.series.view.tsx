import SeriesForm from "../Components/SeriesForm/SeriesForm";

function CreateSeriesView() {
    return (
        <div style={{scrollPadding:10, paddingInline:20}}>
            <h1>Create Series</h1>
            <SeriesForm/>
        </div>
    );

}

export default CreateSeriesView;