<template>
  <main>
    <div class="content">
      <h3>News Management</h3>
      <div class="mt-5 flex justify-between input-parent">
        <div class="flex justify-between buttons" style="width: 30%">
          <div class="filter">
            <button>
              <span><i class="fas fa-filter"></i></span> Filters
            </button>
          </div>
          <div class="add-item">
            <button>+ Add News</button>
          </div>
        </div>
        <div class="ml-auto flex items-center search-bar">
          <span><i class="fas fa-search"></i></span>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <MultipleDelete :newsItems="newsItems" @delete-rows="deleteNews" />
      <table>
        <tr>
          <th>
            <input type="checkbox" name="image" @click="selectAll" />
            Image
          </th>
          <th>Title</th>
          <th>Created At</th>
          <th>Status</th>
        </tr>
        <tr v-for="(news, index) in newsItems" :key="index">
          <td class="flex items-center justify-between">
            <input
              type="checkbox"
              name="image"
              @click="toggleSelection(index)"
            />
            <img src="@/assets/list-news1.png" alt="Image" />
          </td>
          <td>{{ news.title }}</td>
          <td>{{ news.createdAt }}</td>
          <td>
            <div class="flex items-center justify-between adjust">
              <div>
                <button
                  v-if="news.status === 'Published'"
                  class="button public"
                >
                  Published
                </button>
                <button v-if="news.status === 'Draft'" class="button draft">
                  Draft
                </button>
                <button
                  v-if="news.status === 'Inactive'"
                  class="button inactive"
                >
                  Inactive
                </button>
              </div>
              <div class="flex flex-row justify-between edit">
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt" @click="deleteNews(index)"></i>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td><button class="button">Previous</button></td>
          <td><span>Page 1 of 10</span></td>
          <td></td>
          <td><button class="button">Next</button></td>
        </tr>
      </table>
    </div>
  </main>
</template>
<script>
import MultipleDelete from "@/components/List news/MutipleDelete.vue";
export default {
  components: {
    MultipleDelete,
  },
  data() {
    return {
      newsItems: [
        {
          title: "Where can i go? 5 amazing countries that are open right now",
          createdAt: "2024-06-30",
          status: "Published",
        },
        {
          title: "Where can i go? 5 amazing countries that are open right now",
          createdAt: "2024-06-30",
          status: "Published",
        },
        {
          title: "Where can i go? 5 amazing countries that are open right now",
          createdAt: "2024-06-30",
          status: "Inactive",
        },
        {
          title: "Where can i go? 5 amazing countries that are open right now",
          createdAt: "2024-06-30",
          status: "Inactive",
        },
        {
          title: "Where can i go? 5 amazing countries that are open right now",
          createdAt: "2024-06-30",
          status: "Draft",
        },
      ],
      selectedRows: [],
    };
  },
  methods: {
    deleteNews(index) {
      this.newsItems.splice(index, 1);
    },
    toggleSelection(index) {
      if (this.selectedRows.includes(index)) {
        this.selectedRows.splice(this.selectedRows.indexOf(index), 1);
      } else {
        this.selectedRows.push(index);
      }
    },
    selectAll() {
      this.selectedRows = [];
      if (this.selectedRows.length === this.newsItems.length) {
        this.selectedRows = [];
      } else {
        this.selectedRows = Array.from(Array(this.newsItems.length).keys());
      }
    },
    deleteMultiple(indexes) {
      indexes.forEach((index) => {
        this.newsItems.splice(index, 1);
      });
      this.selectedRows = [];
    },
  },
};
</script>
<style scoped>
main {
  width: 100%;
  height: auto;
  background-color: #d9d9d9;
}
main .content {
  padding: 30px 30px 50px 30px;
}
main > div {
  width: 100%;
}
.content h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.2px;
  color: #000000;
}
.input-parent .buttons .filter {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
  width: 107px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.input-parent .buttons .add-item {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
  width: 143px;
  height: 40px;
  background: #000aff;
  border: 1px solid #7280ff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  /* text */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.search-bar {
  width: 33%;
  position: relative;
}
.search-bar input {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 35px;
  gap: 8px;
  width: 320px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.search-bar i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

table {
  overflow-x: auto;
  margin-top: 30px;
  border-collapse: collapse;
  width: 100%;
  padding: 0px;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.05),
    0px 2px 4px -2px rgba(16, 24, 40, 0.05);
  background-color: white;
  border-radius: 8px;
}

td,
th {
  border-bottom: 1px solid #dddddd;
  padding: 8px;
}
th {
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  color: #8a92a6;
}
td {
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #232d42;
}
td .adjust {
  width: 150px;
}
td .edit {
  width: 35px;
}
td .edit i {
  cursor: pointer;
}
tr img {
  width: 85%;
  height: 100%;
}
tr:first-child {
  box-sizing: border-box;
  border: 1px solid #eaecf0;
  border-radius: 8px 8px 0px 0px;
}
table tr:last-child td {
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
}
table tr:last-child button {
  margin-left: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  gap: 8px;
  width: 86px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
table tr:not(:first-child):not(:last-child) button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-bottom: 5px;
  border-radius: 12px;
  cursor: pointer;
  /* text */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 175%;
  color: #ffffff;
}
table .public {
  width: 95px;
  height: 25px;
  background: #4caf50;
}

.inactive {
  width: 72px;
  height: 25px;
  background: rgba(237, 76, 92, 1);
}
.draft {
  width: 54px;
  height: 25px;
  background: rgba(102, 112, 133, 1);
}
</style>
