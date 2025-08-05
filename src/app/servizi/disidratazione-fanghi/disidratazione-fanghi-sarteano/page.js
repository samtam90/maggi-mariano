import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sarteano",
  canonical: links.servizi["disidratazione-fanghi"]["sarteano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sarteano",
  locationNames: { label: "Sarteano", href: "sarteano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
