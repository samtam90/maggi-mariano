import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lecco",
  canonical: links.servizi["centrifugazione-fanghi"]["lecco"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lecco",
  locationNames: { label: "Lecco", href: "lecco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
