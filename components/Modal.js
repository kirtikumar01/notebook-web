import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "@firebase/firestore"
import { ref, getDownloadURL, uploadString } from "@firebase/storage";

function Modal() {

    const [open, setOpen] = useRecoilState(modalState);
    const titleRef = useRef();
    const noteRef = useRef();
    const [loading, setLoading] = useState(null);

    const uplaodPost = async () => {
        if(loading) return;

        setLoading(true);

        const docRef = await addDoc(collection(db, 'notes'), {
            title: titleRef.current.value,
            note: noteRef.current.value,
            timestamp: serverTimestamp(),
        })

        setOpen(false);
        setLoading(false);
    }

  return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
        >
            <div className="flex items-end justify-center min-h-[400px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                {/* trick the browser into centering the modal contents */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
                >
                    &#8203;
                </span>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    {/* <h2>hello</h2> */}
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        <div>
                            {/* {selectedFile ? (
                                <img src={selectedFile} className="w-full object-contain cursor-pointer" onClick={() => setSelectedFile(null)} alt="" />
                            ): (
                                <div
                            onClick={()=>filePickerRef.current.click()}
                            className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                            >
                                <CameraIcon
                                className="h-6 w-6 text-red-600"
                                aria-hidden="true"
                                />                                
                            </div>
                            )} */}
                            

                            <div className="">
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title
                                    as="h3"
                                    className="text-lg leading-6 font-medium text-gray-900"
                                    >
                                        Add a note
                                    </Dialog.Title>

                                    {/* <div>
                                        <input 
                                        // ref={filePickerRef}
                                        type="file"
                                        hidden
                                        // onChange={addImageToPost}
                                        />
                                    </div> */}

                                    <div className="mt-4 flex">
                                        <label className="mr-2" for="">Title</label>
                                        <input 
                                        type="text"
                                        className="border-none focus:ring-0 w-full text-center" 
                                        ref={titleRef}
                                        placeholder="Please Enter Title"
                                        />
                                    </div>
                                    <div className="mt-4 flex">
                                        <label className="mr-2" for="">Note</label>
                                        <input 
                                        type="text"
                                        className="border-none focus:ring-0 w-full text-center" 
                                        ref={noteRef}
                                        placeholder="Please Enter Note"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 sm:mt-6">
                                <button type="button"
                                // disabled={}
                                onClick={uplaodPost}
                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                >
                                    {loading ? "Adding..." : "Add Note"}
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>
  )
}

export default Modal
