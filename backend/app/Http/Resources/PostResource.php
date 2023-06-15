<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
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
        'body' => $this->body,
        'image' => $this->image,
        'created_at' => $this->created_at,
        'name' => $this->user->name,
        'surname' => $this->user->surname,
        'comments' => CommentResource::collection($this->comments),
        'likes_count' => $this->likes_count
       ];
    }
}
