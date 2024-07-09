const mongoose = require("mongoose");
require("dotenv").config();

const Menu = require("../Models/menu.model");
const { connection } = require("../connection");
const data = [
  {
    menu_id: 1,
    id: "masterGroup",
    title: "Masters",
    type: "group",
    icon: "widget",
    accesss: false,
    breadcrumbs: false,
    children: [
      {
        id: "masterCollapse",
        title: "Masters",
        type: "collapse",
        icon: "masterCollapseIcon",
        children: [
          {
            id: "country",
            title: "Country",
            type: "item",
            icon: "icon_country",
            url: "/masters/country",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "site",
            title: "Site",
            type: "item",
            icon: "icon_site",
            url: "/masters/site",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "division",
            title: "Division",
            type: "item",
            icon: "icon_division",
            url: "/masters/division",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "reasons",
            title: "Reasons",
            type: "item",
            icon: "icon_reason",
            url: "/masters/reasons",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "customers",
            title: "Customers",
            type: "item",
            icon: "icon_customer",
            url: "/masters/customers",
            accesss: false,
            breadcrumbs: false,
          },

          {
            id: "vendor",
            title: "Vendor",
            type: "item",
            icon: "icon_vendor",
            url: "/masters/vendor",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "user",
            title: "User",
            type: "item",
            icon: "icon_users",
            url: "/masters/users",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "chargeCode",
            title: "Charge Code",
            type: "item",
            icon: "icon_chargecode",
            url: "/masters/chargeCode",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "service",
            title: "Service",
            type: "item",
            icon: "icon_service",
            url: "/masters/service",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "currency",
            title: "Currency",
            type: "item",
            icon: "icon_currency",
            url: "/masters/currency",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "fieldExecutive",
            title: "Field Executive",
            type: "item",
            icon: "icon_fieldExcutive",
            url: "/masters/fieldExecutive",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "mappingSalemanagerSaleman",
            title: "SaleManagerMapping",
            type: "item",
            icon: "icon_mappingManagerSaleman",
            url: "/masters/mappingSalemanagerSaleman",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "pallet",
            title: "Pallet",
            type: "item",
            icon: "icon_pallet",
            url: "/masters/pallet",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "segment",
            title: "Segment",
            type: "item",
            icon: "icon_segment",
            url: "/masters/segment",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "device",
            title: "Device",
            type: "item",
            icon: "icon_device",
            url: "/masters/device",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "mileStone",
            title: "Mile Stone",
            type: "item",
            icon: "icon_mileStone",
            url: "/masters/mileStone",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "storageLocation",
            title: "Storage Location",
            type: "item",
            icon: "icon_storageLocation",
            url: "/masters/storageLocation",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "driver",
            title: "Driver",
            type: "item",
            icon: "icon_driver",
            url: "/masters/driver",
            accesss: false,
            breadcrumbs: false,
          },
        ],
      },
    ],
  },
  {
    menu_id: 2,
    id: "salesGroup",
    title: "Sales",
    type: "group",
    accesss: false,
    breadcrumbs: false,
    icon: "icon_reciepts",
    children: [
      {
        id: "salesCollapse",
        title: "Sales",
        type: "collapse",
        icon: "salesCollapseIcon",
        children: [
          {
            id: "kanban",
            title: "Kanban",
            type: "item",
            url: "/sales/enquiryBoard",
            accesss: false,
            icon: "sales_kanban",
            breadcrumbs: false,
          },
          {
            id: "lead",
            title: "Lead List",
            type: "item",
            icon: "icon_chart_dots",
            url: "/sales/lead",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "enquiry",
            title: "Enquiry List",
            type: "item",
            icon: "enquiry_icon",
            url: "/sales/enquiry",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "quotation",
            title: "Quotation List",
            type: "item",
            icon: "quotation_icon",
            url: "/sales/quotation",
            accesss: false,
            breadcrumbs: false,
          },
        ],
      },
    ],
  },
  {
    menu_id: 3,
    id: "approvedMenu",
    title: "Approval Section",
    type: "group",
    accesss: false,
    breadcrumbs: false,
    children: [
      {
        id: "customerApproval",
        title: "Customer Approval",
        type: "item",
        icon: "customer_approval",
        url: "/approval/customer",
        accesss: false,
        breadcrumbs: false,
      },
      {
        id: "priceApproval",
        title: "Price Approval",
        type: "item",
        icon: "price_approval",
        url: "/approval/enquiry-price",
        accesss: false,
        breadcrumbs: false,
      },
      // {
      //   id: "quotationApproval",
      //   title: "Quotations Approval",
      //   type: "item",
      //   icon: "quotations_approval",
      //   url: "/approval/quotation",
      //   accesss: false,
      //   breadcrumbs: false,
      // },
    ],
  },
  {
    menu_id: 4,
    id: "bookingGroup",
    title: "LTL Booking",
    type: "group",
    icon: "icon_prebooking",
    accesss: false,
    breadcrumbs: false,
    children: [
      {
        id: "bookingCollapse",
        title: "LTL Booking",
        type: "collapse",
        icon: "bookingCollapseIcon",
        children: [
          {
            id: "firstMileBookingItem",
            title: "FML/PreBooking",
            type: "item",
            icon: "icon_prebooking",
            url: "/firstMilePickup",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "bookingItem",
            title: "Booking",
            type: "item",
            icon: "icon_booking",
            url: "/booking",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "qualityCheckItem",
            title: "Quality Check",
            type: "item",
            icon: "icon_qc",
            url: "/qualityCheck",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "loadList",
            title: "Load List",
            type: "item",
            icon: "icon_loadList",
            url: "/loadList",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "inbound",
            title: "In Bound",
            type: "item",
            icon: "icon_inbound",
            url: "/inbound",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "exportjob",
            title: "Export Job",
            type: "item",
            icon: "icon_exportJob",
            url: "/exportJob",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "importjob",
            title: "Import Job",
            type: "item",
            icon: "icon_importJob",
            url: "/importJob",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "trackOfBooking",
            title: "Bookings Track",
            type: "item",
            icon: "icon_trackOfBooking",
            url: "/trackOfBookings",
            accesss: false,
            breadcrumbs: false,
          },
        ],
      },
    ],
  },
  {
    menu_id: 5,
    id: "ftlbookingGroup",
    title: "FTL Booking",
    type: "group",
    accesss: false,
    breadcrumbs: false,
    icon: "icon_ftl_group_booking",
    children: [
      {
        id: "ftlBookingCollapse",
        title: "FTL Booking",
        type: "collapse",
        icon: "ftlBookingCollapseIcon",
        children: [
          {
            id: "ftlBooking",
            title: "Booking",
            type: "item",
            icon: "icon_ftlBooking",
            url: "/ftlBooking",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "ftlExportJob",
            title: "Job",
            type: "item",
            icon: "icon_ftlExportJob",
            url: "/ftlExportJob",
            accesss: false,
            breadcrumbs: false,
          },
        ],
      },
    ],
  },
  {
    menu_id: 5,
    id: "lmdGroup",
    title: "Last Mile Delivery",
    type: "group",
    accesss: false,
    breadcrumbs: false,
    icon: "icon_lmd",
    children: [
      {
        id: "lmdCollapse",
        title: "Last Mile Delivery",
        type: "collapse",
        icon: "lmdCollapseIcon",
        children: [
          {
            id: "bookingForLmd",
            title: "Booking For LMD",
            type: "item",
            icon: "icon_bookingForLmd",
            url: "/bookingForLmd",
            accesss: false,
            breadcrumbs: false,
          },
          {
            id: "ordersForLmd",
            title: "Orders For LMD",
            type: "item",
            icon: "icon_ordersForLmd",
            url: "/ordersForLmd",
            accesss: false,
            breadcrumbs: false,
          },
        ],
      },
    ],
  },
];

const init = async (data) => {
  try {
    console.log("running seeder !");
    connection();
    Menu.deleteMany({}, (error) => {
      if (error) {
        console.log(error);
      }
    });
    console.log("adding seeder record/s !");
    Menu.insertMany(data, (error, docs) => {
      if (error) console.log(error);
      else console.log("DB seed complete");
      process.exit();
    });

    console.log("running seeder !");
  } catch (error) {
    console.log("Error seeding DB :: ", error?.message);
    process.exit();
  }
};

init(data);