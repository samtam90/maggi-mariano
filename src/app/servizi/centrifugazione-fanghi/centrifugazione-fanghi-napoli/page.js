import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Napoli",
  canonical: links.servizi["centrifugazione-fanghi"]["napoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Napoli",
  locationNames: { label: "Napoli", href: "napoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});
