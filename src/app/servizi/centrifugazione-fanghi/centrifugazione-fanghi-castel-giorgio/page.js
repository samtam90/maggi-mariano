import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Castel Giorgio",
  canonical: links.servizi["centrifugazione-fanghi"]["castel-giorgio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Castel Giorgio",
  locationNames: { label: "Castel Giorgio", href: "castel-giorgio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
