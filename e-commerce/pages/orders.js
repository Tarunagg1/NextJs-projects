import { useRouter } from 'next/router';
import React, { useState } from 'react';
import mongoose from 'mongoose';
import orderModel from '../models/order.model';
import { ToastContainer, toast } from 'react-toastify';


export default function orders() {
    return (
        <div>
            <ToastContainer />
            <h1 className="font-semibold text-center p-8 text-2xl">My Orders</h1>
            <div className="container mx-auto">
                <div className="items">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="bg-white border-b">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    #
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    First
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Last
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Handle
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-gray-100 border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Mark
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Otto
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    @mdo
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Jacob
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Thornton
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    @fat
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-100 border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                                <td colSpan="2" className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                    Larry the Bird
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    @twitter
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_DB);
    }

    const orders = await orderModel.findOne({ userId: "" });

    return {
        props: { orders }
    }
}

