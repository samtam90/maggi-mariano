import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pergine Valdarno",
  canonical: links.servizi["centrifugazione-fanghi"]["pergine-valdarno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pergine Valdarno",
  locationNames: { label: "Pergine Valdarno", href: "pergine-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
