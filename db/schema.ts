import { relations, sql } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  color: text("color").notNull().default("#d62b6f"),
  icon: integer("icon").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: text("user_id").notNull(),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  tasks: many(tasks),
}));

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  color: text("color").notNull().default("#808080"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: text("user_id").notNull(),
});

export const tagsRelations = relations(tags, ({ many }) => ({
  tasksTags: many(tasksTags),
}));

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  dueDate: timestamp("due_date"),
  completed: boolean("completed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  projectId: integer("project_id").references(() => projects.id),
  priority: integer("priority").default(3).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  attachments: jsonb("attachments"),
  links: jsonb("links"),
  userId: text("user_id").notNull(),
});

export const tasksRelations = relations(tasks, ({ one, many }) => ({
  project: one(projects, {
    fields: [tasks.projectId],
    references: [projects.id],
  }),
  tasksTags: many(tasksTags),
}));

export const tasksTags = pgTable(
  "tasks_tags",
  {
    taskId: integer("task_id")
      .notNull()
      .references(() => tasks.id),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    userId: text("user_id").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.taskId, table.tagId] }),
  })
);

export const tasksTagsRelations = relations(tasksTags, ({ one }) => ({
  task: one(tasks, {
    fields: [tasksTags.taskId],
    references: [tasks.id],
  }),
  tag: one(tags, {
    fields: [tasksTags.tagId],
    references: [tags.id],
  }),
}));
