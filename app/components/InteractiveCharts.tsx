'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import type { PlotData, Layout } from 'plotly.js'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

interface ChartProps {
  data: any[]
}

export default function InteractiveCharts({ data }: ChartProps) {
  // Helper function to calculate trend line
  const calculateTrendLine = (xData: number[], yData: number[]) => {
    const n = xData.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    
    for (let i = 0; i < n; i++) {
      sumX += xData[i];
      sumY += yData[i];
      sumXY += xData[i] * yData[i];
      sumX2 += xData[i] * xData[i];
    }
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return {
      x: [Math.min(...xData), Math.max(...xData)],
      y: [
        slope * Math.min(...xData) + intercept,
        slope * Math.max(...xData) + intercept
      ]
    };
  }

  // Prepare data for engagement metrics
  const views = data.map(d => d.view);
  const likes = data.map(d => d.like);
  const coins = data.map(d => d.coin);
  const favorites = data.map(d => d.favorite);

  // Calculate trend lines
  const likeTrend = calculateTrendLine(views, likes);
  const coinTrend = calculateTrendLine(views, coins);
  const favoriteTrend = calculateTrendLine(views, favorites);

  const engagementScatters = [
    {
      data: [
        {
          x: views,
          y: likes,
          mode: 'markers',
          type: 'scatter',
          name: 'Likes',
          marker: { color: '#3B82F6', size: 6 }
        } as PlotData,
        {
          x: likeTrend.x,
          y: likeTrend.y,
          mode: 'lines',
          type: 'scatter',
          name: 'Trend',
          line: { color: '#3B82F6', dash: 'dash' }
        } as PlotData
      ],
      layout: {
        title: {
          text: 'Likes vs Views Correlation',
          font: { size: 16 }
        },
        xaxis: { title: 'Views', showgrid: true, gridcolor: 'rgba(255,255,255,0.1)' },
        yaxis: { title: 'Likes', showgrid: true, gridcolor: 'rgba(255,255,255,0.1)' },
        plot_bgcolor: 'rgba(31, 41, 55, 1)',
        paper_bgcolor: 'rgba(31, 41, 55, 1)',
        font: { color: '#fff' },
        showlegend: true,
        margin: { t: 40 }
      } as Partial<Layout>
    },
    {
      data: [
        {
          x: views,
          y: coins,
          mode: 'markers',
          type: 'scatter',
          name: 'Coins',
          marker: { color: '#10B981', size: 6 }
        } as PlotData,
        {
          x: coinTrend.x,
          y: coinTrend.y,
          mode: 'lines',
          type: 'scatter',
          name: 'Trend',
          line: { color: '#10B981', dash: 'dash' }
        } as PlotData
      ],
      layout: {
        title: {
          text: 'Coins vs Views Correlation',
          font: { size: 16 }
        },
        xaxis: { title: 'Views', showgrid: true, gridcolor: 'rgba(255,255,255,0.1)' },
        yaxis: { title: 'Coins', showgrid: true, gridcolor: 'rgba(255,255,255,0.1)' },
        plot_bgcolor: 'rgba(31, 41, 55, 1)',
        paper_bgcolor: 'rgba(31, 41, 55, 1)',
        font: { color: '#fff' },
        showlegend: true,
        margin: { t: 40 }
      } as Partial<Layout>
    },
    {
      data: [
        {
          x: views,
          y: favorites,
          mode: 'markers',
          type: 'scatter',
          name: 'Favorites',
          marker: { color: '#F59E0B', size: 6 }
        } as PlotData,
        {
          x: favoriteTrend.x,
          y: favoriteTrend.y,
          mode: 'lines',
          type: 'scatter',
          name: 'Trend',
          line: { color: '#F59E0B', dash: 'dash' }
        } as PlotData
      ],
      layout: {
        title: {
          text: 'Favorites vs Views Correlation',
          font: { size: 16 }
        },
        xaxis: { title: 'Views', showgrid: true, gridcolor: 'rgba(255,255,255,0.1)' },
        yaxis: { title: 'Favorites', showgrid: true, gridcolor: 'rgba(255,255,255,0.1)' },
        plot_bgcolor: 'rgba(31, 41, 55, 1)',
        paper_bgcolor: 'rgba(31, 41, 55, 1)',
        font: { color: '#fff' },
        showlegend: true,
        margin: { t: 40 }
      } as Partial<Layout>
    }
  ];

  // Process data for UP主 analysis
  const upData = Object.entries(
    data.reduce((acc: { [key: string]: { name: string; views: number } }, curr) => {
      if (!acc[curr.mid]) {
        acc[curr.mid] = {
          name: curr.name,
          views: 0
        }
      }
      acc[curr.mid].views += curr.view;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1].views - a[1].views)
    .slice(0, 10);

  const topCreatorsBar = {
    data: [{
      x: upData.map(d => d[1].name),
      y: upData.map(d => d[1].views),
      type: 'bar',
      name: 'Total Views',
      text: upData.map(d => d[1].views.toLocaleString()),
      textposition: 'auto',
      hovertemplate: '%{x}<br>Views: %{y:,.0f}<extra></extra>',
      marker: { color: '#3B82F6' }
    } as PlotData],
    layout: {
      title: {
        text: 'Top 10 Content Creators by Total Views',
        font: { size: 16 }
      },
      xaxis: {
        title: 'Creator Name',
        tickangle: -45
      },
      yaxis: {
        title: 'Total Views',
        tickformat: ',.0f'
      },
      plot_bgcolor: 'rgba(31, 41, 55, 1)',
      paper_bgcolor: 'rgba(31, 41, 55, 1)',
      font: { color: '#fff' },
      showlegend: false,
      margin: { b: 150, l: 100 }
    } as Partial<Layout>
  };

  // Calculate category performance
  const categoryData = Object.entries(
    data.reduce((acc: { [key: string]: { views: number; videos: number } }, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { views: 0, videos: 0 }
      }
      acc[curr.category].views += curr.view;
      acc[curr.category].videos++;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1].views - a[1].views)
    .map(([category, data]) => ({
      category,
      views: data.views
    }));

  const categoryPerformance = {
    data: [{
      x: categoryData.map(d => d.category),
      y: categoryData.map(d => d.views),
      type: 'bar',
      name: 'Total Views',
      text: categoryData.map(d => d.views.toLocaleString()),
      textposition: 'auto',
      hovertemplate: '%{x}<br>Views: %{y:,.0f}<extra></extra>',
      marker: {
        color: categoryData.map((_, i) => 
          `hsl(${(i * 360) / categoryData.length}, 70%, 50%)`
        )
      }
    } as PlotData],
    layout: {
      title: {
        text: 'Category Performance Analysis: Total Views by Content Type',
        font: { size: 16 }
      },
      xaxis: {
        title: 'Category',
        tickangle: -45
      },
      yaxis: { 
        title: 'Total Views',
        tickformat: ',.0f'
      },
      plot_bgcolor: 'rgba(31, 41, 55, 1)',
      paper_bgcolor: 'rgba(31, 41, 55, 1)',
      font: { color: '#fff' },
      showlegend: false,
      margin: { b: 150, l: 100 }
    } as Partial<Layout>
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {engagementScatters.map((scatter, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <Plot
              data={scatter.data}
              layout={scatter.layout}
              useResizeHandler
              className="w-full h-[300px]"
            />
          </div>
        ))}
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <Plot
          data={topCreatorsBar.data}
          layout={topCreatorsBar.layout}
          useResizeHandler
          className="w-full h-[500px]"
        />
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <Plot
          data={categoryPerformance.data}
          layout={categoryPerformance.layout}
          useResizeHandler
          className="w-full h-[400px]"
        />
      </div>
    </div>
  )
} 