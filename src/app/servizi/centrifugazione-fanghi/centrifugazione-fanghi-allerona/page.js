import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Allerona",
  canonical: links.servizi["centrifugazione-fanghi"]["allerona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Allerona",
  locationNames: { label: "Allerona", href: "allerona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
