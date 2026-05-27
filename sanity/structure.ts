import type { StructureResolver } from "sanity/structure";
import { singletonDocuments, singletonTypes } from "./singleton";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...Object.values(singletonDocuments).map((singleton) =>
        S.listItem()
          .title(singleton.title)
          .schemaType(singleton.schemaType)
          .child(
            S.document()
              .schemaType(singleton.schemaType)
              .documentId(singleton.id),
          ),
      ),

      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ""),
      ),
    ]);

// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title("Content")
//     .items([
//       S.listItem()
//         .title(singletonDocuments.home.title)
//         .schemaType(singletonDocuments.home.schemaType)
//         .child(
//           S.document()
//             .schemaType(singletonDocuments.home.schemaType)
//             .documentId(singletonDocuments.home.id),
//         ),

//       ...S.documentTypeListItems().filter(
//         (listItem) => !singletonTypes.has(listItem.getId() ?? ""),
//       ),
//     ]);
