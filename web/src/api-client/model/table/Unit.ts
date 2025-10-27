
export interface Unit {
  id: number;
  id_unit_parent?: number;
  otm_id_unit_parent?: Unit;
  name: string;
  location?: string;
  description?: string;
  created_at: Date;
}