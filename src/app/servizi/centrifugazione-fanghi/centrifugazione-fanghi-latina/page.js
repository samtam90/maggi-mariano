import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Latina",
  canonical: links.servizi["centrifugazione-fanghi"]["latina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Latina",
  locationNames: { label: "Latina", href: "latina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});
