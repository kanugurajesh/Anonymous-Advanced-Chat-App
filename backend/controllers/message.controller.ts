import { Request, Response } from "express";
import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    // @ts-ignore
    const senderId = req.user._id.toString();

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // The below command will run parallelly
    await Promise.all([conversation.save(), newMessage.save()]);

    return res.status(201).json(newMessage);
  } catch (error: any) {
    console.log("Error in send message controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
  res.status(200).json({ success: "success", id: req.params.id });
};

export const getMessage = async (req: Request, res: Response) => {
  try {
    const { id: userToChatId } = req.params;
    // @ts-ignore
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if(!conversation) return res.status(200).json([]);

    res.status(200).json(conversation?.messages);
  } catch (error: any) {
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error " });
  }
};