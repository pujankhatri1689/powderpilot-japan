/**
 * PowderPilot Japan - Central Resort Data Hub
 *
 * This file re-exports all types and modular resort datasets.
 * Individual prefecture datasets are maintained in `@/data/resorts/{prefecture}.ts`
 * for modular scaling to 200–300+ mountains.
 */

export * from "./types";
export * from "./resorts/index";
