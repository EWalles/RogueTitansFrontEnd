import React from 'react'
import StatSheet from "../components/CharacterSheet/StatSheet"
import ProfileSheet from "../components/CharacterSheet/ProfileSheet"
import SpellSheet from "../components/CharacterSheet/SpellSheet"
export default function CSheet() {
  return (
    <div>
      <StatSheet />
      <ProfileSheet />
      <SpellSheet />
    </div>
  )
}
