<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

/** @mixin /App/Models/User */
class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'body' => $this->body,
            'image' => $this->image,
            'created_at' => $this->created_at->format('d.m.Y'),
            'name' => $this->user->name,
            'surname' => $this->user->surname,
            //'comments' => CommentResource::collection($this->comments),
            'comments_count' => $this->comments_count,
            'likes_count' => $this->likes_count,
            'liked' => $this->likes->where('user_id', Auth::id())->first() != null,
        ];
    }
}
