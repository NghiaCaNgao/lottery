<template>
  <div class="page">
    <div class="preview panel"></div>
    <div class="create-settings panel">
      <div>
        <el-form :model="settings">
          <el-form-item label="Name">
            <el-input v-model="settings.name"></el-input>
          </el-form-item>
          <el-form-item label="Labels">
            <draggable v-model="settings.labels">
              <transition-group>
                <div v-for="element in settings.labels" :key="element.id">
                  {{ element.name }}
                </div>
              </transition-group>
            </draggable>
          </el-form-item>
          <el-form-item>
            <el-select v-model="settings.turnMode">
              <el-option label="Consequence" value="0"></el-option>
              <el-option label="Manual" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <button>Create</button>
        <button>See all my games</button>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "create",
  components: {
    draggable,
  },
  data() {
    return {
      settings: {
        name: null,
        labels: [],
        turnMode: 0,
      },
    };
  },
};
</script>