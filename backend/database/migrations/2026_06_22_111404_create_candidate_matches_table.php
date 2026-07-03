<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('candidate_matches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employment_job_id')->constrained()->cascadeOnDelete();
            $table->foreignId('candidate_id')->constrained()->cascadeOnDelete();
            $table->integer('score')->nullable();
            $table->json('matched_skills')->nullable();
            $table->json('missing_skills')->nullable();
            $table->text('recommendation')->nullable();
            $table->boolean('experience_match')->default(false);
            $table->boolean('seniority_match')->default(false);
            $table->text('summary')->nullable();
            $table->json('strengths')->nullable();
            $table->json('weaknesses')->nullable();
            $table->json('red_flags')->nullable();
            $table->decimal('confidence',5,2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidate_matches');
    }
};
