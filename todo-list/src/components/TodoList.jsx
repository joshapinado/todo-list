function ToDoList(props) {
    return (
      <>
        <main className="flex justify-center">
          <section className="pt-10">
            <div className="border-2 border-black p-6 rounded-lg shadow-lg bg-white w-[400px]">
              <header className="text-center text-2xl font-bold mb-5">To-Do List</header>
              <div>
                <div className="flex items-center gap-2 border-b border-black pb-2 mb-3">
                  <input type="checkbox" className="w-5 h-5 border-black"/> 
                  <label>{props.task1}</label>
                </div>
                <div className="flex items-center gap-2 border-b border-black pb-2 mb-3">
                  <input type="checkbox" className="w-5 h-5 border-black"/> 
                  <label>{props.task2}</label>
                </div>
                <div className="flex items-center gap-2 border-b border-black pb-2 mb-3">
                  <input type="checkbox" className="w-5 h-5 border-black"/> 
                  <label>{props.task3}</label>
                </div>
                <div className="flex items-center gap-2 border-b border-black pb-2 mb-3">
                  <input type="checkbox" className="w-5 h-5 border-black"/> 
                  <label>{props.task4}</label>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button className="px-4 py-2 rounded-sm bg-blue-600 text-white">{props.addButtonLabel}</button>
                <button className="px-4 py-2 rounded-sm bg-red-600 text-white">{props.deleteButtonLabel}</button>
              </div>
              <div className="flex justify-center mt-6">
                <table className="border border-black w-auto">
                  <thead>
                    <tr className="border border-black bg-gray-200">
                      <th className="px-2 py-1 text-sm border border-black">Members</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-black">
                      <td className="px-2 py-1 text-sm text-center border border-black">Andrei Vibar</td>
                    </tr>
                    <tr className="border border-black">
                      <td className="px-2 py-1 text-sm text-center border border-black">Josh Apinado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </>
    ); 
  }
  export default ToDoList;