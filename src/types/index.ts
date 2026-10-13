export interface Project {
  name: string
  year: string
  tone: string
  summary: string
  stack: string[]
  shot: string
  video?: string
  liveUrl: string
  codeUrl: string
}

export interface Role {
  org: string
  title: string
  period?: string
  points: string[]
}
