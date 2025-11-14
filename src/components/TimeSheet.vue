<template>
    <div class="container mt-5">
        <h1 class="mb-4">Weekly Timesheet Entry</h1>

        <!-- Header Information Section -->
        <div class="card mb-4">
            <div class="card-header">
                Timesheet Details
            </div>
            <div class="card-body">
                <form class="row g-3">
                    <div class="col-md-4">
                        <label for="employeeName" class="form-label">Employee Name</label>
                        <input type="text" class="form-control" id="employeeName" v-model="timesheetDetails.employeeName" readonly>
                    </div>
                    <div class="col-md-4">
                        <label for="startDate" class="form-label">Week Start Date</label>
                        <input type="date" class="form-control" id="startDate" v-model="timesheetDetails.startDate">
                    </div>
                    <div class="col-md-4">
                        <label for="endDate" class="form-label">Week End Date</label>
                        <input type="date" class="form-control" id="endDate" v-model="timesheetDetails.endDate">
                    </div>
                </form>
            </div>
        </div>

        <!-- Timesheet Entry Table Section -->
        <div class="card mb-4">
            <div class="card-header">
                Hours Worked
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Project/Task</th>
                                <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(entry, index) in timesheetEntries" :key="index">
                                <td>
                                    <select class="form-select" v-model="entry.projectId">
                                        <option value="A">Noah</option>
                                        <option value="B">Quinton</option>
                                        <option value="C">Brennan</option>
                                        <option value="D">(Noah)</option>
                                    </select>
                                </td>
                                <!-- Loop through days to input hours -->
                                <td v-for="(hours, dayKey) in entry.hours" :key="dayKey">
                                    <!-- Use v-model to bind input to the reactive data -->
                                    <input type="number" class="form-control" min="0" max="24" v-model.number="entry.hours[dayKey]">
                                </td>
                                <td class="align-middle">
                                    <!-- Use a computed property for the row total -->
                                    {{ calculateRowTotal(entry) }}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="table-info">
                                <th colspan="8" class="text-end">Weekly Total Hours:</th>
                                <th>{{ weeklyTotalHours }}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button class="btn btn-success mt-3" @click="addRow">+ Add Row</button>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="mb-4 text-end">
            <button class="btn btn-secondary me-2" @click="saveDraft">Save Draft</button>
            <span/>
            <button class="btn btn-primary" @click="submitTimesheet">Submit Timesheet</button>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

// Define the days of the week for the table headers
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Reactive state for timesheet details
const timesheetDetails = reactive({
    employeeName: 'John Doe',
    startDate: '2025-11-03',
    endDate: '2025-11-09'
});

// Reactive state for timesheet entries (the table data)
const timesheetEntries = reactive([
    {
        projectId: 'A',
        hours: { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 }
    }
]);

// Function to calculate total hours for a single row (entry)
const calculateRowTotal = (entry) => {
    return Object.values(entry.hours).reduce((sum, current) => sum + current, 0);
};

// Computed property for the total hours of the entire timesheet
const weeklyTotalHours = computed(() => {
    return timesheetEntries.reduce((total, entry) => total + calculateRowTotal(entry), 0);
});

// Method to add a new empty row to the timesheet
const addRow = () => {
    timesheetEntries.push({
        projectId: 'A', // Default project
        hours: { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 }
    });
};

// Methods for actions
const saveDraft = () => {
    console.log("Saving draft:", { details: timesheetDetails, entries: timesheetEntries });
    alert("Timesheet draft saved!");
};

const submitTimesheet = () => {
    console.log("Submitting timesheet:", { details: timesheetDetails, entries: timesheetEntries });
    alert("Timesheet submitted!");
};
</script>

<style scoped>
/* Optional: Add custom styles here if needed. Scoped means they only apply to this component. */
</style>
