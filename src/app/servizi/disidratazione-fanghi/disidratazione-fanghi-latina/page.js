import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Latina",
  canonical: links.servizi["disidratazione-fanghi"]["latina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Latina",
  locationNames: { label: "Latina", href: "latina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});
