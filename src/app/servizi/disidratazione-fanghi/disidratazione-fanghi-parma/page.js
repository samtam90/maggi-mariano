import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Parma",
  canonical: links.servizi["disidratazione-fanghi"]["parma"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Parma",
  locationNames: { label: "Parma", href: "parma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["parma"],
      name: "Parma",
  }),
});
